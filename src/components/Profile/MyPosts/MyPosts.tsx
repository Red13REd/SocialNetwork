import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import React, {ChangeEvent} from "react";
import {MyPostsType} from "./MyPostsСontainer";



const MyPosts: React.FC<MyPostsType> = ({state,addPost,updateNewPostText}) => {

    let postsElements = state.postsData.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                       likeCounts={p.likeCounts}/>)

    const addPostPosts = () => {
        addPost()
    }

    let onPostChangePosts = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        updateNewPostText(newText)
    }

    return (
        <div className={classes.content}>

            <div className={classes.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea onChange={(e) => onPostChangePosts(e)} value={state.newPostText}/>
                </div>
                <div>
                    <button onClick={addPostPosts}>Add post</button>
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