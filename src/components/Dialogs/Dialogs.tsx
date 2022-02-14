import React from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType} from "../../redax/state";


type DialogsPropsType = {
    State: MessagesPageType

}


export const Dialogs: React.FC<DialogsPropsType> = ({State}) => {

    let dialogsElement = State.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = State.messagesData.map(m => <Message message={m.message} id={m.id}/>)

    const newMassageElement: any = React.createRef()

    const addMassage = (newMassageElement: any) => {
        let text = newMassageElement.current.value
        alert(text)
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
                <textarea ref={newMassageElement}/>
                <button onClick={addMassage}>Send massage</button>
            </div>
        </div>
    )
}

