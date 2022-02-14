import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/Post/ProfileInfo/ProfileInfo";
import React from "react";
import {ProfileType} from "../../redax/state";

type ProfilePropsType = {
    State: ProfileType
    addPostState: () => void
    updateNewPostText: (newText: string) => void

}

const Profile: React.FC<ProfilePropsType> = ({State, addPostState, updateNewPostText}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                State={State}
                addPostState={addPostState}
                updateNewPostText={updateNewPostText}

            />
        </div>
    )
}

export default Profile;