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


export let state: StateType = {
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

}


export const addPostState = () => {
    let newPost: PostDataType = {id: new Date().getTime(), message: state.profile.newPostText, likeCounts: 0}
    state.profile.postsData.push(newPost)
    state.profile.newPostText = ""
    rerenderEntireTree(state)
};

export const updateNewPostText = (newText: string) => {
    state.profile.newPostText = newText
    rerenderEntireTree(state)
};


