import { NavLink } from "react-router-dom";
import cls from "./usersItem.module.css";
import { followUnfollowAPI } from "../../../api/api";
const UsersItem = (props) => {
    return (
        <div className={cls.user_wrapper_items} key={props.id}>
            <div className={cls.avatar_wrapper}>
                <div className={cls.avatar}>
                    <NavLink to={`/profile/${props.id}`}>
                        <img
                            className={cls.name_avatar}
                            src={props.photoUrl}
                            alt=""
                        />
                    </NavLink>
                </div>
                <div className={cls.btn_wrapper}>
                    {props.followed ? (
                        <button
                            disabled={props.followingInProgress.some(
                                (id) => id === props.id
                            )}
                            className={cls.btn}
                            onClick={() => {
                                props.toggleFollowingProgress(true, props.id);
                                followUnfollowAPI
                                    .setUnfollow(props.id)
                                    .then((data) => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(props.id);
                                        }
                                        props.toggleFollowingProgress(
                                            false,
                                            props.id
                                        );
                                    });
                            }}
                        >
                            Follow
                        </button>
                    ) : (
                        <button
                            disabled={props.followingInProgress.some(
                                (id) => id === props.id
                            )}
                            className={cls.btn}
                            onClick={() => {
                                props.toggleFollowingProgress(true, props.id);
                                followUnfollowAPI
                                    .setFollow(props.id)
                                    .then((data) => {
                                        if (data.resultCode === 0) {
                                            props.follow(props.id);
                                        }
                                        props.toggleFollowingProgress(
                                            false,
                                            props.id
                                        );
                                    });
                            }}
                        >
                            Unfollow
                        </button>
                    )}
                </div>
            </div>
            <div className={cls.user_info_wrapper}>
                <div className={cls.name_info_wrapper}>
                    <div>{props.fullName}</div>
                    <div>{props.status}</div>
                </div>
                <div className={cls.name_info_wrapper}>
                    <div>{"props.location.country"}</div>
                    <div>{"props.location.city"}</div>
                </div>
            </div>
        </div>
    );
};

export default UsersItem;
