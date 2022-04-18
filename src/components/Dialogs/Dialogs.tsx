import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType} from "./DialogsContainer";


export const Dialogs: React.FC<DialogsType> = ({state, updateNewMessage, addMassage,}) => {

    let dialogsElement = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElement = state.messagesData.map(m => <Message message={m.message} key={m.id} id={m.id}/>)

    const updateNewMessageDilogs = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        updateNewMessage(text)
    }

    const addMassageDilogs = () => {
        addMassage()
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsiItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
                <div>
                    <textarea onChange={updateNewMessageDilogs} value={state.newMessageText}/>
                    <div>
                        <button onClick={addMassageDilogs}>Send massage</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

