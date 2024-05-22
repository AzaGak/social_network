import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
    postData: [
        { id: 1, message: "Hi how are you?", likesCount: 3 },
        { id: 2, message: "It`s my first post", likesCount: 7 },
    ],
    newPostText: "it-kamasutra.com",
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    // state это profilePage
    // let stateCopy = { ...state, postData: [...state.postData] };
    switch (action.type) {
        case ADD_POST:
            // const { newPostText } = state;
            const newPost = {
                id: 4, //(postData[postData.length - 1].id += 1), // Добавляем + 1 к последнему id в массиве
                message: action.newPostText,
                likesCount: 0,
            };
            // postData.push(newPost);
            // stateCopy.postData.push(newPost);
            // stateCopy.newPostText = "";
            return {
                ...state,
                newPostText: "",
                postData: [...state.postData, newPost],
            };

        case UPDATE_NEW_POST_TEXT:
            // stateCopy.newPostText = action.newText;
            // state.newPostText = action.newText;
            return { ...state, newPostText: action.newText };
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        case SET_STATUS:
            return { ...state, status: action.status };
        default:
            return state;
    }
};

const addPostActionCreator = (newPostText) => {
    const action = { type: ADD_POST, newPostText };
    return action;
};

const updateNewPostTextActionCreator = (text) => {
    const action = { type: UPDATE_NEW_POST_TEXT, newText: text };
    return action;
};

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setStatus = (status) => ({ type: SET_STATUS, status });

const profileThunk = (match) => (dispatch) => {
    let userId = match.params.userId;
    if (!userId) userId = 31130;

    profileAPI.getProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
    });

    profileAPI.getStatus(userId).then((data) => dispatch(setStatus(data)));
};

const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then((responce) => {
        if (responce.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export {
    addPostActionCreator,
    updateNewPostTextActionCreator,
    setUserProfile,
    profileThunk,
    updateStatus,
};
export default profileReducer;
