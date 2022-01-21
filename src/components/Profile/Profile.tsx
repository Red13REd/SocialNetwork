import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/Post/ProfileInfo/ProfileInfo";
import React from "react";
import { ProfileType} from "../../redax/state";

type ProfilePropsType = {
    State: ProfileType
    addPoststate: (text:string)=>void
}

const Profile: React.FC<ProfilePropsType> = ({State, addPoststate}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={State.postsData} addPoststate={addPoststate}/>
        </div>
    )
}

export default Profile;