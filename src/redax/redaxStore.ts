import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";

export let reducers = combineReducers({
    profile: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof reducers>

export let store = createStore(reducers)