import React from "react";
import {MessagesPageType} from "../../redax/state";
import {addMessageActionCreator, updateNewMessagesTextActionCreator} from "../../redax/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redax/redaxStore";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect";


type mapStateToProps = {
    state: MessagesPageType,
}

type mapDispatchToPropsType = {
    updateNewMessage: (text: string) => void
    addMassage: () => void
}

export type DialogsType = mapStateToProps & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        state: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessage: (text: string) => {
            dispatch(updateNewMessagesTextActionCreator(text))
        },
        addMassage: () => {
            dispatch(addMessageActionCreator())
        },
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)
