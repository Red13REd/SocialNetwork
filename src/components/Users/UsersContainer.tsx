import {connect} from "react-redux";
import {Users} from "./Users";
import {initialStateUsersType, setUsers, toggleFollow, usersType} from "../../redax/usersReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redax/redaxStore";

type mapStateToProps = {
    state:initialStateUsersType
}

type mapDispatchToPropsType = {
    toggleFollow:(id:string)=>void
    setUsers:(users:Array<usersType>)=>void
}

export type UsersType = mapStateToProps & mapDispatchToPropsType


let mapStateToProps = (state:AppStateType) => {
    return {
        state: state.usersPage,
    }
}

let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        toggleFollow: (id:string) => dispatch(toggleFollow(id)),
        setUsers: (users:Array<usersType>) => dispatch(setUsers(users)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);