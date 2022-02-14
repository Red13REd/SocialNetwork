import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogDataType} from "../../../redax/state";


export const DialogItem: React.FC<DialogDataType> = ({id, name}) => {

    let path = "/dialogs/" + id

    return (
        <div className={classes.main}>
            <div className={classes.img}>
                <img className={classes.img}
                     src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-7.jpg"
                     alt="Profile photo"/>
            </div>
            <div className={classes.dialog + " " + classes.active}>
                <NavLink className={classes.navLink} to={path}>{name}</NavLink>
            </div>
        </div>
    )
}


