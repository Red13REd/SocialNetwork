import styles from "./users.module.css"
import {UsersType} from "./UsersContainer";
import React from "react";
import axios from "axios";
// @ts-ignore
import userPhoto from "../../assets/img/userAvatar.png"

export const Users: React.FC<UsersType> = ({state, setUsers, toggleFollow}) => {
    let getUsers = () => {
        if (state.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                setUsers(response.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {
                state.users.map(m => {
                    return (
                        <div key={m.id}>
                            <span>
                                <div>
                                     <img className={styles.photo}
                                          src={m.photos.small !== null ? m.photos.small : userPhoto}/>
                                </div>
                                <div>
                                    <button
                                        onClick={() => toggleFollow(m.id)}>{m.followed ? "Follow" : "Unfollow"}</button>
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
