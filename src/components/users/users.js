import React from "react";
import cls from "./users.module.css";
import UsersItem from "./usersItem/usersItem";
import UsersPage from "./usersPage/usersPage";
import axios from "axios";
import userPhoto from "../../assets/images/user-avatar.png";

class Users extends React.Component {
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

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios
    //             .get("https://social-network.samuraijs.com/api/1.0/users")
    //             .then((responce) => {
    //                 this.props.setUsers(responce.data.items);
    //             });
    //     }
    // };

    render() {
        const pagesCount = Math.ceil(
            this.props.totalUserCount / this.props.pageSize
        );

        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        let curP = this.props.currentPage;
        let curPF = curP - 5 < 0 ? 0 : curP - 5;
        let curPL = curP + 5;
        let slicedPages = pages.slice(curPF, curPL);

        const newArrayPages = slicedPages.map((page) => (
            <UsersPage
                currentPage={this.props.currentPage}
                setCurrentPage={this.props.setCurrentPage}
                onPageChanged={this.onPageChanged}
                page={page}
                key={page}
            />
        ));

        const newArrayUsers = this.props.users.map((user) => (
            <UsersItem
                id={user.id}
                photoUrl={
                    user.photos.small != null ? user.photos.small : userPhoto
                }
                followed={user.followed}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                key={user.id}
                fullName={user.name}
                status={user.status}
            />
        ));
        return (
            <div className={cls.users}>
                <div className={cls.pagWrap}>{newArrayPages}</div>
                {/* <button onClick={this.getUsers}>Get Users</button> */}
                {newArrayUsers}
            </div>
        );
    }
}
export default Users;
