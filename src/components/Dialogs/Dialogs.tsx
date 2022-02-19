import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType,} from "../../redax/state";


type DialogsPropsType = {
    state: MessagesPageType
    addMassageContainer: () => void
    updateNewMessageContainer: (text: string) => void
}


export const Dialogs: React.FC<DialogsPropsType> = ({state, updateNewMessageContainer, addMassageContainer}) => {

    let dialogsElement = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = state.messagesData.map(m => <Message message={m.message} id={m.id}/>)

    const updateNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        updateNewMessageContainer(text)
    }

    const addMassage = () => {
        addMassageContainer()
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsiItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
                <div>
                    <textarea onChange={updateNewMessage} value={state.newMessageText}/>
                    <div>
                        <button onClick={addMassage}>Send massage</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

