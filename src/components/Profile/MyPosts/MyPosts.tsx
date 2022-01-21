import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import React, {RefObject} from "react";
import {PostDataType} from "../../../redax/state";

type MyPostsPropsType = {
    postsData: Array<PostDataType>
    addPoststate: (text: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (postsData, addPoststate) => {

    let postsElements = postsData.postsData.map(p => <Post id={p.id} message={p.message} likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {

        let text = newPostElement.current!.value
         addPoststate(text)
        newPostElement.current!.value = ''
    }


    return (
        <div className={classes.content}>

            <div className={classes.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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