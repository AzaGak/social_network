import { userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
    users: [
        // {
        //     id: 1,
        //     fullName: "Azat Y",
        //     status: "I`m a boss",
        //     photoUrl:
        //         "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        //     location: { city: "Aktau", country: "Kazakhstan" },
        //     followed: false,
        // },
        // {
        //     id: 2,
        //     fullName: "Zura K",
        //     status: "My wife",
        //     photoUrl:
        //         "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        //     location: { city: "Aktau", country: "Kazakhstan" },
        //     followed: true,
        // },
        // {
        //     id: 3,
        //     fullName: "Alikhan J",
        //     status: "My son",
        //     photoUrl:
        //         "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        //     location: { city: "Aktau", country: "Kazakhstan" },
        //     followed: true,
        // },
        // {
        //     id: 4,
        //     fullName: "Bayazid J",
        //     status: "My son",
        //     photoUrl:
        //         "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        //     location: { city: "Aktau", country: "Kazakhstan" },
        //     followed: true,
        // },
        // {
        //     id: 5,
        //     fullName: "Nurgul A",
        //     status: "My sister",
        //     photoUrl:
        //         "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        //     location: { city: "Egjan", country: "North Cypr" },
        //     followed: true,
        // },
    ],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                }),
            };
        case SET_USERS:
            return { ...state, users: action.users };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUserCount: action.count };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(
                          (id) => id !== action.userId
                      ),
            };
        default:
            return state;
    }
};

const follow = (userId) => ({ type: FOLLOW, userId });
const unfollow = (userId) => ({ type: UNFOLLOW, userId });
const setUsers = (users) => ({ type: SET_USERS, users });
const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});
const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});
const setTotalUsersCount = (totalUserCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUserCount,
});

const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
});

const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    };
};

const toggleFollowing = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        userAPI.setUnfollow(id).then((data) => {
            if (data.resultCode === 0) {
                dispatch(unfollow(id));
            }
            dispatch(toggleFollowingProgress(false, id));
        });
    };
};

const toggleUnfollowing = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        userAPI.setFollow(id).then((data) => {
            if (data.resultCode === 0) {
                dispatch(follow(id));
            }
            dispatch(toggleFollowingProgress(false, id));
        });
    };
};

export {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsersThunkCreator,
    toggleFollowing,
    toggleUnfollowing,
};
export default usersReducer;
