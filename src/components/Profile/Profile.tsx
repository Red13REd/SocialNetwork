import ProfileInfo from "./MyPosts/Post/ProfileInfo/ProfileInfo";
import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsСontainer";
import {profileType} from "../../redax/profileReducer";

type ProfilePropsType = {
    profile: profileType
}

const Profile: React.FC<ProfilePropsType> = ({profile}) => {

    return (
        <div>
            <ProfileInfo profile = { profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;