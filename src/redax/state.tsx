import {rerenderEntireTree} from "../index";

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
    addPostState: () => void
    updateNewPostText: (newText: string) => void
    getState: () => StateType
}

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
    addPostState() {
        let newPost: PostDataType = {id: new Date().getTime(), message: this._state.profile.newPostText, likeCounts: 0}
        this._state.profile.postsData.push(newPost)
        this._state.profile.newPostText = ""
        rerenderEntireTree(store)
    },
    updateNewPostText(newText: string) {
        this._state.profile.newPostText = newText
        rerenderEntireTree(store)
    },
}









