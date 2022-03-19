import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

export let reducers = combineReducers({
    profile: profileReducer,
    messagesPage: dialogsReducer,
})

export type AppStateType = ReturnType<typeof reducers>

export let store = createStore(reducers)