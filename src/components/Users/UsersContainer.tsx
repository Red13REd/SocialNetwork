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
import React from "react";
import axios from "axios";
import {Users} from "./Users";

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

export class UsersApi extends React.Component<UsersType, UsersType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.state.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users
            users={this.props.state.users}
            currentPage={this.props.state.currentPage}
            pageSize={this.props.state.pageSize}
            totalUsersCount={this.props.state.totalUsersCount}
            onPageChanged={this.onPageChanged}
            toggleFollow={this.props.toggleFollow}
        />
    }
}

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApi);