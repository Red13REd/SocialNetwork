import styles from "./users.module.css"
import {UsersType} from "./UsersContainer";
import React from "react";

export const Users:React.FC<UsersType> = ({state,setUsers,toggleFollow}) => {
    if(state.users.length === 0){
        setUsers([
            {
                id: "1",
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKng-qF7B4zdMk1SmWUnhf0RAcIlRbNbzLLnVG-FkZXlFWvg84Vci32xXDD9gJ8qWrB8s&usqp=CAU",
                followed: false,
                fullName: "Dmitry",
                status: "I'm a boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: "2",
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKng-qF7B4zdMk1SmWUnhf0RAcIlRbNbzLLnVG-FkZXlFWvg84Vci32xXDD9gJ8qWrB8s&usqp=CAU",
                followed: true,
                fullName: "Sasha",
                status: "I'm a boss too",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: "3",
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKng-qF7B4zdMk1SmWUnhf0RAcIlRbNbzLLnVG-FkZXlFWvg84Vci32xXDD9gJ8qWrB8s&usqp=CAU",
                followed: false,
                fullName: "Andrew",
                status: "I'm also a boss",
                location: {city: "Kiev", country: "Ukraine"}
            },
        ],)
    }

    return (
        <div>
            {
                state.users.map(m => {
                    return (
                        <div key={m.id}>
                            <span>
                                <div>
                                    <img className={styles.photo}
                                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKng-qF7B4zdMk1SmWUnhf0RAcIlRbNbzLLnVG-FkZXlFWvg84Vci32xXDD9gJ8qWrB8s&usqp=CAU"/>
                                </div>
                                <div>
                                    <button
                                        onClick={() => toggleFollow(m.id)}>{m.followed ? "Follow" : "Unfollow"}</button>
                                </div>
                            </span>

                            <span>
                                <span>
                                    <div>{m.fullName}</div>
                                    <div>{m.status}</div>
                                </span>
                                <span>
                                    <div>{m.location.country}</div>
                                    <div>{m.location.city}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    );
};
