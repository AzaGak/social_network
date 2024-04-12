const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    postData: [
        { id: 1, message: "Hi how are you?", likesCount: 3 },
        { id: 2, message: "It`s my first post", likesCount: 7 },
    ],
    newPostText: "it-kamasutra.com",
};

const profileReducer = (state = initialState, action) => {
    // state это profilePage
    // let stateCopy = { ...state, postData: [...state.postData] };
    switch (action.type) {
        case ADD_POST:
            const { newPostText } = state;
            const newPost = {
                id: 4, //(postData[postData.length - 1].id += 1), // Добавляем + 1 к последнему id в массиве
                message: newPostText,
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

        default:
            return state;
    }
};

const addPostActionCreator = () => {
    const action = { type: ADD_POST };
    return action;
};

const updateNewPostTextActionCreator = (text) => {
    const action = { type: UPDATE_NEW_POST_TEXT, newText: text };
    return action;
};

export { addPostActionCreator, updateNewPostTextActionCreator };
export default profileReducer;
