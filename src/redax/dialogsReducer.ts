import {ActionsType, MessagesPageType} from "./state";

let initialState:MessagesPageType ={
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
}

export const dialogsReducer = (state = initialState, action: ActionsType):MessagesPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 1, message: state.newMessageText}],
                newMessageText: ""
            }
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {...state,newMessageText: action.newMessage}
        default:
            return state

    }

};

export const addMessageActionCreator = () => ({type: "ADD-MESSAGE"} as const)

export const updateNewMessagesTextActionCreator = (text: string) => ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newMessage: text
} as const)


