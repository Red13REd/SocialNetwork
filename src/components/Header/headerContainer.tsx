import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {authMe, InitialStateType} from "../../redax/authReducer";
import {AppStateType} from "../../redax/redaxStore";

type mapStateToProps = {
    state: InitialStateType
}
type mapDispatchToPropsType = {
    authMe: () => void
}
const mapStateToProps = (state: AppStateType) => {
    return {
        state: state.auth
    }
}
export type HeaderComponentType = mapStateToProps & mapDispatchToPropsType


class HeaderComponent extends React.Component<HeaderComponentType, HeaderComponentType> {

    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return <Header {...this.props}/>
    }
}


export default connect(mapStateToProps, {authMe})(HeaderComponent)