import classes from './Post.module.css';
import React from "react";
import {PostDataType} from "../../../../redax/state";



const Post:React.FC<PostDataType> = ({message,likeCounts}) => {
    return <div className={classes.item}>
        <img src="https://www.meme-arsenal.com/memes/8ab5fe07681cd172915e9472a0a8443d.jpg" alt=""/>
        {message}
        <div>
            <span>{`Like ${likeCounts}`}</span>
        </div>
    </div>

}


export default Post;