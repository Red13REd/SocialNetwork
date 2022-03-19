import ProfileInfo from "./MyPosts/Post/ProfileInfo/ProfileInfo";
import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsСontainer";

type ProfilePropsType = {

}

const Profile: React.FC<ProfilePropsType> = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;