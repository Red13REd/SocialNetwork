import React from "react";
import {MessagesPageType} from "../../redax/state";
import {addMessageActionCreator, updateNewMessagesTextActionCreator} from "../../redax/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redax/redaxStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";


type mapStateToProps = {
    state:MessagesPageType
}

type mapDispatchToPropsType = {
    updateNewMessage:(text:string)=>void
    addMassage:()=>void
}

export type DialodsType = mapStateToProps & mapDispatchToPropsType

let mapStateToProps = (state:AppStateType):mapStateToProps => {
    return {
        state: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        updateNewMessage: (text:string) => {
            dispatch(updateNewMessagesTextActionCreator(text))
        },
        addMassage: () => {
            dispatch(addMessageActionCreator())
        },
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);