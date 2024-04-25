import UsersItem from "./usersItem/usersItem";
import UsersPage from "./usersPage/usersPage";
import userPhoto from "../../assets/images/user-avatar.png";
import cls from "./users.module.css";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = curP - 5 < 0 ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    const newArrayPages = slicedPages.map((page) => (
        <UsersPage
            currentPage={props.currentPage}
            setCurrentPage={props.setCurrentPage}
            onPageChanged={props.onPageChanged}
            page={page}
            key={page}
        />
    ));

    const newArrayUsers = props.users.map((user) => (
        <UsersItem
            id={user.id}
            photoUrl={user.photos.small != null ? user.photos.small : userPhoto}
            followed={user.followed}
            unfollow={props.unfollow}
            follow={props.follow}
            key={user.id}
            fullName={user.name}
            status={user.status}
            followingInProgress={props.followingInProgress}
            toggleFollowing={props.toggleFollowing}
            toggleUnfollowing={props.toggleUnfollowing}
        />
    ));
    return (
        <div className={cls.users}>
            <div className={cls.pagWrap}>{newArrayPages}</div>
            {newArrayUsers}
        </div>
    );
};

export default Users;
