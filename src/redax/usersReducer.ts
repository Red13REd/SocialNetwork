export type locationType = { city: string, country: string }

export type usersType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: locationType
}

export type initialStateUsersType = {
    users: Array<usersType>
}

let initialState: initialStateUsersType = {
    users: [
       /* {
            id: "1",
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKng-qF7B4zdMk1SmWUnhf0RAcIlRbNbzLLnVG-FkZXlFWvg84Vci32xXDD9gJ8qWrB8s&usqp=CAU",
            followed: false,
            fullName: "Dmitry",
            status: "I'm a boss",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: "2",
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKng-qF7B4zdMk1SmWUnhf0RAcIlRbNbzLLnVG-FkZXlFWvg84Vci32xXDD9gJ8qWrB8s&usqp=CAU",
            followed: true,
            fullName: "Sasha",
            status: "I'm a boss too",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: "3",
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKng-qF7B4zdMk1SmWUnhf0RAcIlRbNbzLLnVG-FkZXlFWvg84Vci32xXDD9gJ8qWrB8s&usqp=CAU",
            followed: false,
            fullName: "Andrew",
            status: "I'm also a boss",
            location: {city: "Kiev", country: "Ukraine"}
        },*/
    ],
}

export type ActionsUsersType =
    ReturnType<typeof toggleFollow>
    | ReturnType<typeof setUsers>

export const usersReducer = (state: initialStateUsersType = initialState, action: ActionsUsersType): initialStateUsersType => {
    switch (action.type) {
        case 'TOGGLE_FOLLOW':
            return {...state, users: state.users.map(m => m.id === action.id ? {...m, followed: !m.followed} : m)}
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
};

export const toggleFollow = (id: string) => ({type: 'TOGGLE_FOLLOW', id} as const)
export const setUsers = (users: Array<usersType>) => ({type: 'SET-USERS', users} as const)

