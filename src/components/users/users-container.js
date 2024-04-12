import React from "react";
import axios from "axios";
import Users from "./users";
import { connect } from "react-redux";
import {
    followAC,
    setUsersAC,
    unfolowAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
} from "../../redax/users-reducer";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((responce) => {
                this.props.setUsers(responce.data.items);
                this.props.setTotalUsersCount(responce.data.totalCount);
            });
    }

    onPageChanged = (pageNUmber) => {
        this.props.setCurrentPage(pageNUmber);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNUmber}&count=${this.props.pageSize}`
            )
            .then((responce) => {
                this.props.setUsers(responce.data.items);
            });
    };

    render() {
        return (
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setCurrentPage={this.props.setCurrentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfolowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
    };
};

const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersAPIComponent);

export default UsersContainer;
