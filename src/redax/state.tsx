import {rerenderEntireTree} from "../index";
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "./profileReducer";
import {addMessageActionCreator, dialogsReducer, updateNewMessagesTextActionCreator} from "./dialogsReducer";


export type DialogDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    message: string
}

export type PostDataType = {
    id: number
    message: string
    likeCounts: number
}

export type MessagesPageType = {
    messagesData: Array<MessageDataType>
    dialogsData: Array<DialogDataType>
    newMessageText: string
}

export type ProfileType = {
    postsData: Array<PostDataType>
    newPostText: string
}

export type StateType = {
    profile: ProfileType
    messagesPage: MessagesPageType


}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessagesTextActionCreator>

export let store: StoreType = {
    _state: {
        profile: {
            postsData: [
                {id: 1, message: "Hi, how are you", likeCounts: 15},
                {id: 2, message: "It's my first post", likeCounts: 20},
                {id: 3, message: "bla bla", likeCounts: 1},
                {id: 4, message: "Da da", likeCounts: 5},
            ],
            newPostText: "",
        },
        messagesPage: {
            messagesData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Yo"},
            ],
            newMessageText: "",
            dialogsData: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Victor"},
                {id: 6, name: "Valera"},
            ],
        },

    },
    getState() {
        return this._state
    },

    dispatch(action) {

       /* this._state.profile = profileReducer(this._state.profile, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        rerenderEntireTree()*/
    }
}





