import {connect} from "react-redux";
import {
    initialStateUsersType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollow, toggleIsFetching,
    usersType
} from "../../redax/usersReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redax/redaxStore";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/preloader";

type mapStateToProps = {
    state: initialStateUsersType
}

type mapDispatchToPropsType = {
    toggleFollow: (id: string) => void
    setUsers: (users: Array<usersType>) => void
    setCurrentPage: (number: number) => void
    setTotalUsersCount: (number: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersType = mapStateToProps & mapDispatchToPropsType

export class UsersApi extends React.Component<UsersType, UsersType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.state.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.state.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.state.users}
                currentPage={this.props.state.currentPage}
                pageSize={this.props.state.pageSize}
                totalUsersCount={this.props.state.totalUsersCount}
                onPageChanged={this.onPageChanged}
                toggleFollow={this.props.toggleFollow}
            />
        </>

    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        state: state.usersPage,
    }
}

export const UsersContainer = connect(mapStateToProps, {
    toggleFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersApi);