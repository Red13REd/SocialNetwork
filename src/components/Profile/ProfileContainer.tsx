import React from "react";
import {connect} from "react-redux";
import {getProfile, profileType, setUserProfile, UserprofileType} from "../../redax/profileReducer";
import Profile from "./Profile";
import {AppStateType} from "../../redax/redaxStore";
import {Navigate, useMatch} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";

type PathParamsType = {
    match: any
}

type mapStateToProps = {
    state: UserprofileType
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: profileType) => void
    getProfile: (userId: string) => void
}


export type ProfileType = mapStateToProps & mapDispatchToPropsType
export type ProfileContainerType = mapStateToProps & mapDispatchToPropsType & PathParamsType


class ProfileContainer extends React.Component<ProfileContainerType, ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : 2;
        this.props.getProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.state.profile}/>
            </div>
        )
    }
}

const ProfileURLMatch = (props:ProfileType) => {
    const match = useMatch('/profile/:userId/');
    // @ts-ignore
    return <AuthRedirectComponent {...props} match={match}/>;
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state: AppStateType): mapStateToProps => ({
    state: state.profile,
})

export default connect(mapStateToProps, {setUserProfile, getProfile,})(ProfileURLMatch)