import React from "react";
import classes from "./../Dialogs.module.css";
import {MessageDataType} from "../../../redax/state";




export const Message:React.FC<MessageDataType> = ({message}) => {
    return <div className={classes.message}> {message}</div>
}

