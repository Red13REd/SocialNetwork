import {followApi, usersApi} from "../api/api";
import {Dispatch} from "redux";

export type PhotoType = {
    small: string
    large: string
}

export type usersType = {
    id: string
    photos: PhotoType
    followed: boolean
    name: string
    status: string

}

export type initialStateUsersType = {
    users: Array<usersType>,
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
}

let initialState: initialStateUsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export type ActionsUsersType =
    ReturnType<typeof toggleFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingInProgress>

export const usersReducer = (state: initialStateUsersType = initialState, action: ActionsUsersType): initialStateUsersType => {
    switch (action.type) {
        case 'TOGGLE_FOLLOW':
            return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: !m.followed} : m)}
        case 'SET-USERS':
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, users: [...state.users], currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return <initialStateUsersType>{
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(f => f !== action.id)
            }
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
};

export const toggleFollow = (id: string) => ({type: 'TOGGLE_FOLLOW', id,} as const)
export const setUsers = (users: Array<usersType>) => ({type: 'SET-USERS', users,} as const)

export const setCurrentPage = (currentNumber: number) => ({
    type: 'SET-CURRENT-PAGE',
    currentPage: currentNumber,
} as const)

export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsersCount,
} as const)

export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleFollowingInProgress = (isFetching: boolean, id: string) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    id
} as const)

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    usersApi.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}

export const follow = (id: string, followed: boolean) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(true, id))
    followed ? followApi.followDelete(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(toggleFollow(id))
                }
                dispatch(toggleFollowingInProgress(false, id))
            })
        : followApi.followPost(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(toggleFollow(id))
                }
                dispatch(toggleFollowingInProgress(false, id))
            })
}
