import React from "react";
import { StoreType,} from "../../../redax/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profileReducer";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = ({store}) => {

    let state = store.getState()

    const addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    let onPostChange = (newText:string) => {
        store.dispatch(updateNewPostTextActionCreator(newText))
    }

    return (
        <MyPosts state={state.profile} onPostChangeContainer={onPostChange} addPostContainer={addPost}/>
    )
}
