import {connect} from "react-redux";
import {
    follow,
    getUsers,
    initialStateUsersType,
    setCurrentPage,
} from "../../redax/usersReducer";
import {AppStateType} from "../../redax/redaxStore";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/preloader";

type mapStateToProps = {
    state: initialStateUsersType
}

type mapDispatchToPropsType = {
    setCurrentPage: (number: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (id: string, followed: boolean) => void
}

export type UsersType = mapStateToProps & mapDispatchToPropsType

export class UsersApi extends React.Component<UsersType, UsersType> {

    componentDidMount() {
        this.props.getUsers(this.props.state.currentPage, this.props.state.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.state.pageSize)
        this.props.setCurrentPage(pageNumber)
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
                followingInProgress={this.props.state.followingInProgress}
                follow={this.props.follow}
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
    setCurrentPage,
    getUsers,
    follow,
})(UsersApi);