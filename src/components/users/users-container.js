import React from "react";
import Users from "./users";
import Preloader from "../common/preloader/preloader";
import { connect } from "react-redux";
import {
    follow,
    unfollow,
    toggleFollowingProgress,
    getUsersThunkCreator,
    toggleFollowing,
    toggleUnfollowing,
} from "../../redax/users-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(
            this.props.currentPage,
            this.props.pageSize
        );
        // this.props.toggleIsFetching(true);
        // userAPI
        //     .getUsers(this.props.currentPage, this.props.pageSize)
        //     .then((data) => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //     });
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
        // this.props.setCurrentPage(pageNUmber);
        // this.props.toggleIsFetching(true);
        // userAPI.getUsers(pageNUmber, this.props.pageSize).then((data) => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        // });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader />
                ) : (
                    <Users
                        totalUserCount={this.props.totalUserCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        setCurrentPage={this.props.setCurrentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        followingInProgress={this.props.followingInProgress}
                        toggleFollowing={this.props.toggleFollowing}
                        toggleUnfollowing={this.props.toggleUnfollowing}
                    />
                )}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfolowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         },
//     };
// };

// const AuthRedirectContainer = withAuthRedirect(UsersAPIComponent);

// const UsersContainer = connect(mapStateToProps, {
//     follow,
//     unfollow,
//     toggleFollowingProgress,
//     getUsersThunkCreator,
//     toggleFollowing,
//     toggleUnfollowing,
// })(AuthRedirectContainer);

const UsersContainer = compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        toggleFollowingProgress,
        getUsersThunkCreator,
        toggleFollowing,
        toggleUnfollowing,
    }),
    withAuthRedirect
)(UsersAPIComponent);

export default UsersContainer;
