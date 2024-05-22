// import React from "react";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redax/profile-reducer";
import MyPosts from "./mypost";
// import StoreContext from "../../../storeContext";
import { connect } from "react-redux";

// Контейнеру разрешенно быть не тупой, разрешенно знать про данные
// const MyPostsContainer = (props) => {
//     // const state = props.store.getState();
//     // const { dispatch } = props.store;
//     // const { postData, newPostText } = state.profilePage;

//     // const addPost = () => {
//     //     dispatch(addPostActionCreator());
//     // };

//     // const PostChange = (text) => {
//     //     let action = updateNewPostTextActionCreator(text);
//     //     dispatch(action);
//     // };

//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const state = store.getState();
//                 const { postData, newPostText } = state.profilePage;
//                 const { dispatch } = store;

//                 const addPost = () => {
//                     dispatch(addPostActionCreator());
//                 };

//                 const PostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     dispatch(action);
//                 };

//                 return (
//                     <MyPosts
//                         updateNewPostText={PostChange}
//                         addPost={addPost}
//                         // postData={postData}
//                         // newPostText={newPostText}

//                         postData={postData}
//                         newPostText={newPostText}
//                     />
//                 );
//             }}
//         </StoreContext.Consumer>
//     );
// };

const mapStateToProps = (state) => {
    const { postData, newPostText } = state.profilePage;
    return {
        postData: postData,
        newPostText: newPostText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
