import {connect} from "react-redux";
import {
    initialStateUsersType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollow,
    usersType
} from "../../redax/usersReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redax/redaxStore";
import Users from "./Users";

type mapStateToProps = {
    state:initialStateUsersType
}

type mapDispatchToPropsType = {
    toggleFollow:(id:string)=>void
    setUsers:(users:Array<usersType>)=>void
    setCurrentPage:(number:number)=>void
    setTotalUsersCount:(number:number)=>void
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
        setCurrentPage:(number) => dispatch(setCurrentPage(number)),
        setTotalUsersCount:(number) => dispatch(setTotalUsersCount(number)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);