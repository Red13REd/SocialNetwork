import React from 'react';
import styles from "./users.module.css";
// @ts-ignore
import userPhoto from "../../assets/img/userAvatar.png";
import {usersType} from "../../redax/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

export type UsersType = {
    users: Array<usersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (number: number) => void
    toggleFollow: (number: string) => void
}

export const Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const onClickHandlerToggleFollow = (id: string, followed: boolean) => {

        followed ? axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                {
                    withCredentials: true,
                    headers: {
                        "API-KEY": "4b1b8a71-d75f-4f42-8e70-f2ca2c6751b4"
                    }
                })
                .then(response => {
                    console.log(response.data)
                    if (response.data.resultCode === 0) {
                        props.toggleFollow(id)
                    }
                })
            : axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
                {
                    withCredentials: true,
                    headers: {
                        "API-KEY": "4b1b8a71-d75f-4f42-8e70-f2ca2c6751b4"
                    }
                })
                .then(response => {
                    console.log(response.data)
                    if (response.data.resultCode === 0) {
                        props.toggleFollow(id)
                    }
                })
    }

    return (
        <div>
            <div>
                {pages.map(m => {
                    return (
                        <span onClick={() => props.onPageChanged(m)}
                              className={props.currentPage === m ? styles.selectedPage : ""}>{m}</span>
                    )
                })}
            </div>
            {
                props.users.map(m => {
                    return (
                        <div key={m.id}>
                            <span>
                                <div>
                                     <NavLink to={"/profile/" + m.id}>
                                         <img className={styles.photo}
                                              src={m.photos.small !== null ? m.photos.small : userPhoto}/>
                                     </NavLink>
                                </div>
                                <div>
                                    <button
                                        onClick={() => onClickHandlerToggleFollow(m.id, m.followed)}>{m.followed ? "Follow" : "Unfollow"}</button>
                                </div>
                            </span>

                            <span>
                                <span>
                                    <div>{m.name}</div>
                                    <div>{m.status}</div>
                                </span>
                                <span>
                                    <div>{"m.location.country"}</div>
                                    <div>{"m.location.city"}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    );
};
