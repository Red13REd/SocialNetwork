import {profileType, setUserProfile} from "./profileReducer";

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
