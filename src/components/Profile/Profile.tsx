import ProfileInfo from "./MyPosts/Post/ProfileInfo/ProfileInfo";
import React from "react";
import {StoreType} from "../../redax/state";
import {MyPostsContainer} from "./MyPosts/MyPostsСontainer";

type ProfilePropsType = {
    store: StoreType
}

const Profile: React.FC<ProfilePropsType> = ({store}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={store}
            />
        </div>
    )
}

export default Profile;