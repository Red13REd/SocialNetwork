import {profileType, setUserProfile} from "./profileReducer";
import {authApi, profileApi} from "../api/api";
import {Dispatch} from "redux";

export type userDataType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

export type profileAuthType = {
    profile: profileType
}

export  type InitialStateType = userDataType & profileAuthType

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    profile: null,
}

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
};

type ActionsType = ReturnType<typeof setAuthUserData> | ReturnType<typeof setUserProfile>

export const setAuthUserData = (data: userDataType) => ({type: "SET-USER-DATA", data} as const)

export const authMe = () => (dispatch: Dispatch) => {
    authApi.authMe().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data))
            return response.data.data.id
        }
    }).then(id => profileApi.getProfile(id))
        .then(profile => {
            dispatch(setUserProfile(profile.data))
        });
}