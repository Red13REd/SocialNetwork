import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {profileType, setUserProfile, UserprofileType} from "../../redax/profileReducer";
import Profile from "./Profile";
import {AppStateType} from "../../redax/redaxStore";


type mapStateToProps = {
    state: UserprofileType
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: profileType) => void
}


export type ProfileType = mapStateToProps & mapDispatchToPropsType


class ProfileContainer extends React.Component<ProfileType, ProfileType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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

let mapStateToProps = (state: AppStateType) => ({
    state: state.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)