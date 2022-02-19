import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

let reducers = combineReducers({
    profile: profileReducer,
    messagesPage: dialogsReducer,
})

export let store = createStore(reducers)