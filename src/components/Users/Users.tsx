import React from "react";
import styles from "./users.module.css"
import axios from "axios";
// @ts-ignore
import userPhoto from "../../assets/img/userAvatar.png";
import {UsersType} from "./UsersContainer";


class Users extends React.Component<UsersType, UsersType>{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.state.users.map(m => {
                        return (
                            <div key={m.id}>
                            <span>
                                <div>
                                    <img className={styles.photo}
                                         src={m.photos.small !== null ? m.photos.small : userPhoto}/>
                                </div>
                                <div>
                                    <button
                                        onClick={() => this.props.toggleFollow(m.id)}>{m.followed ? "Follow" : "Unfollow"}</button>
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
    }
}


export default Users;