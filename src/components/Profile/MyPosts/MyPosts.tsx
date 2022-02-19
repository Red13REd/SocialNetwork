import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import React, {ChangeEvent} from "react";
import {ProfileType, } from "../../../redax/state";

type MyPostsPropsType = {
    state: ProfileType
    addPostContainer: () => void
    onPostChangeContainer: (newText:string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({state,addPostContainer,onPostChangeContainer}) => {

    let postsElements = state.postsData.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                       likeCounts={p.likeCounts}/>)

    const addPost = () => {
        addPostContainer()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
       onPostChangeContainer(newText)
    }

    return (
        <div className={classes.content}>

            <div className={classes.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea onChange={(e) => onPostChange(e)} value={state.newPostText}/>
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