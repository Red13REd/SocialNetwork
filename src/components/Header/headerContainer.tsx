import Header from "./Header";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateType, setAuthUserData, userDataType} from "../../redax/authReducer";
import {profileType, setUserProfile} from "../../redax/profileReducer";
import {AppStateType} from "../../redax/redaxStore";

type mapStateToProps = {
    state: InitialStateType
}

type mapDispatchToPropsType = {
    setAuthUserData: (data: userDataType) => void
    setUserProfile: (profile: profileType) => void
}

export type HeaderComponentType = mapStateToProps & mapDispatchToPropsType


class HeaderComponent extends React.Component<HeaderComponentType, HeaderComponentType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true}
        ).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data)
                return response.data.data.id
            }
        }).then(response => {
            return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response}`)
        }).then(response => {
                this.props.setUserProfile(response.data)
            }
        );
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        state: state.auth
    }
}

export default connect(mapStateToProps, {setAuthUserData, setUserProfile})(HeaderComponent)