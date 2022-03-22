export type locationType = { city: string, country: string }

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
}

let initialState: initialStateUsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

export type ActionsUsersType =
    ReturnType<typeof toggleFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>

export const usersReducer = (state: initialStateUsersType = initialState, action: ActionsUsersType): initialStateUsersType => {
    switch (action.type) {
        case 'TOGGLE_FOLLOW':
            return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: !m.followed} : m)}
        case 'SET-USERS':
            return {...state, users:  action.users}
        case "SET-CURRENT-PAGE":
            return {...state, users: [...state.users], currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
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

