import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profileReducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../redax/StoreContext";
import {connect} from "react-redux";
import {AppStateType} from "../../../redax/redaxStore";
import {MessagesPageType, ProfileType} from "../../../redax/state";
import {Dispatch} from "redux";

type mapStateToProps = {
    state:ProfileType
}

type mapDispatchToPropsType = {
    updateNewPostText:(text:string)=>void
    addPost:()=>void
}

export type MyPostsType = mapStateToProps & mapDispatchToPropsType

let mapStateToProps = (state:AppStateType):mapStateToProps => {
    return {
        state: state.profile,
    }
}


let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        updateNewPostText:(text:string) =>{
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost:()=>{
            dispatch(addPostActionCreator())
        },
    }
}


export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);