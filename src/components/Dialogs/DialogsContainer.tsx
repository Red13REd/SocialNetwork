import React from "react";
import {StoreType} from "../../redax/state";
import {addMessageActionCreator, updateNewMessagesTextActionCreator} from "../../redax/dialogsReducer";
import {Dialogs} from "./Dialogs";


type DialogsPropsType = {
    store: StoreType
}


export const DialogsContainer: React.FC<DialogsPropsType> = ({store}) => {

let state = store.getState()

    const updateNewMessage = (text:string) => {
        const newVar = updateNewMessagesTextActionCreator(text)
        store.dispatch(newVar)
    }

    const addMassage = () => {
        store.dispatch(addMessageActionCreator())
    }

    return (
        <Dialogs  addMassageContainer={addMassage} updateNewMessageContainer={updateNewMessage} state={state.messagesPage}/>
    )
}

