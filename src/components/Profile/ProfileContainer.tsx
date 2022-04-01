import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {profileType, setUserProfile, UserprofileType} from "../../redax/profileReducer";
import Profile from "./Profile";
import {AppStateType} from "../../redax/redaxStore";
import {useMatch} from "react-router-dom";
import {profileApi} from "../../api/api";

type PathParamsType = {
    match: any
}


type mapStateToProps = {
    state: UserprofileType
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: profileType) => void
}


export type ProfileType = mapStateToProps & mapDispatchToPropsType
export type ProfileContainerType = mapStateToProps & mapDispatchToPropsType & PathParamsType


class ProfileContainer extends React.Component<ProfileContainerType, ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : 2;
        profileApi.getProfile(userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }


    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.state.profile}/>
            </div>
        )
    }
}

const ProfileURLMatch = (props: ProfileType) => {
    const match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match}/>;
}

let mapStateToProps = (state: AppStateType): mapStateToProps => ({
    state: state.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileURLMatch)