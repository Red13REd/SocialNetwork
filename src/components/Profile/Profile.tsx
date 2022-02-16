import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/Post/ProfileInfo/ProfileInfo";
import React from "react";
import {ActionsType, ProfileType} from "../../redax/state";

type ProfilePropsType = {
    State: ProfileType
    dispatch: (action: ActionsType) => void
}

const Profile: React.FC<ProfilePropsType> = ({State, dispatch}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                State={State}
                dispatch={dispatch}
            />
        </div>
    )
}

export default Profile;