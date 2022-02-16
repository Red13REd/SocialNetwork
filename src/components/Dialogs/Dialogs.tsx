import React from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsType,
    addMessageActionCreator,
    MessagesPageType,
    updateNewMessagesTextActionCreator
} from "../../redax/state";


type DialogsPropsType = {
    State: MessagesPageType
    dispatch: (action: ActionsType) => void
}


export const Dialogs: React.FC<DialogsPropsType> = ({State,dispatch}) => {

    let dialogsElement = State.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = State.messagesData.map(m => <Message message={m.message} id={m.id}/>)

    const newMassageElement: any = React.createRef()

    const updateNewMessage = () => {
        let text = newMassageElement.current.value
        const newVar = updateNewMessagesTextActionCreator(text)
       dispatch(newVar)
    }

    const addMassage  = () => {
        dispatch(addMessageActionCreator())
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsiItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
            <div>
                <textarea  onChange={updateNewMessage} ref={newMassageElement} value={State.newMessageText}/>
                <button onClick={addMassage}>Send massage</button>
            </div>
        </div>
    )
}

