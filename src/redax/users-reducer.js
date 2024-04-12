const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

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
        default:
            return state;
    }
};

const followAC = (userId) => ({ type: FOLLOW, userId });
const unfolowAC = (userId) => ({ type: UNFOLLOW, userId });
const setUsersAC = (users) => ({ type: SET_USERS, users });
const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});
const setTotalUsersCountAC = (totalUserCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUserCount,
});

export {
    followAC,
    unfolowAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
};
export default usersReducer;
