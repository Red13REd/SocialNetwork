import {ActionsType, PostDataType} from "./state";
import {profileApi} from "../api/api";
import {Dispatch} from "redux";

export type photosType = {
    small: string
    large: string
}

export type contactsType = {
    "facebook": string | null
    "website": string | null,
    "vk": string | null
    "twitter": string | null
    "instagram": string | null
    "youtube": string | null
    "github": string | null
    "mainLink": string | null
}

export type profileType = {
    aboutMe: string
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: photosType
} | null

export type UserprofileType = {
    postsData: Array<PostDataType>
    newPostText: string
    profile: profileType
}

let initialState: UserprofileType = {
    postsData: [
        {id: 1, message: "Hi, how are you", likeCounts: 15},
        {id: 2, message: "It's my first post", likeCounts: 20},
        {id: 3, message: "bla bla", likeCounts: 1},
        {id: 4, message: "Da da", likeCounts: 5},
    ],
    newPostText: "",
    profile: null,
}

export type ProfileActionsType = ActionsType | ReturnType<typeof setUserProfile>

export const profileReducer = (state = initialState, action: ProfileActionsType): UserprofileType => {

    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                postsData: [...state.postsData, {id: 5, message: state.newPostText, likeCounts: 1}],
                newPostText: ""
            }
        case 'UPDATED-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        default:
            return state
    }

};

export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextActionCreator = (text: string) => ({
    type: 'UPDATED-NEW-POST-TEXT',
    newText: text
} as const)
export const setUserProfile = (profile: profileType) => ({type: 'SET-USER-PROFILE', profile} as const)

export const getProfile = (userId: string) => (dispatch: Dispatch) => {
    profileApi.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
