import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redax/redaxStore";
import React, {ComponentType} from "react";

type mapStateToPropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}


export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to="/login"/>;

        return <Component  {...restProps as T}/>
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}