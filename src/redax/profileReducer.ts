import {ActionsType, ProfileType} from "./state";

let initialState:ProfileType = {
    postsData: [
        {id: 1, message: "Hi, how are you", likeCounts: 15},
        {id: 2, message: "It's my first post", likeCounts: 20},
        {id: 3, message: "bla bla", likeCounts: 1},
        {id: 4, message: "Da da", likeCounts: 5},
    ],
    newPostText: "",
}



export const profileReducer = (state = initialState, action: ActionsType):ProfileType => {

    switch (action.type) {
        case 'ADD-POST':
            return {...state,postsData: [...state.postsData,{id: 5, message: state.newPostText, likeCounts: 1}],newPostText: ""}
        case 'UPDATED-NEW-POST-TEXT':
            return {...state,newPostText: action.newText}
        default:
            return state
    }

};

export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)

export const updateNewPostTextActionCreator = (text: string) => ({
    type: 'UPDATED-NEW-POST-TEXT',
    newText: text
} as const)