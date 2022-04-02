import {connect} from "react-redux";
import {
    initialStateUsersType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollow, toggleFollowingInProgress, toggleIsFetching,
    usersType
} from "../../redax/usersReducer";
import {AppStateType} from "../../redax/redaxStore";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/preloader";
import {usersApi} from "../../api/api";

type mapStateToProps = {
    state: initialStateUsersType
}

type mapDispatchToPropsType = {
    toggleFollow: (id: string) => void
    setUsers: (users: Array<usersType>) => void
    setCurrentPage: (number: number) => void
    setTotalUsersCount: (number: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, id: string) => void
}

export type UsersType = mapStateToProps & mapDispatchToPropsType

export class UsersApi extends React.Component<UsersType, UsersType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersApi.getUsers(this.props.state.currentPage, this.props.state.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersApi.getUsers(pageNumber, this.props.state.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
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
                followingInProgress={this.props.state.followingInProgress}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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
    toggleFollowingInProgress,
})(UsersApi);