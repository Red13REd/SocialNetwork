import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import React, {ChangeEvent} from "react";
import {ActionsType, ProfileType,} from "../../../redax/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profileReducer";

type MyPostsPropsType = {
    State: ProfileType
    dispatch: (action: ActionsType) => void

}

const MyPosts: React.FC<MyPostsPropsType> = ({State, dispatch}) => {

    let postsElements = State.postsData.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                       likeCounts={p.likeCounts}/>)

    const addPost = () => {
        dispatch(addPostActionCreator())
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let newText = e.currentTarget.value
        dispatch(updateNewPostTextActionCreator(newText))
    }

    return (
        <div className={classes.content}>

            <div className={classes.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea onChange={(e) => onPostChange(e)} value={State.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>

            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>


    )
}

export default MyPosts;