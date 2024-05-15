import React from "react";
import cls from "./mypost.module.css";
import Post from "./posts/post";
// import MyPostForm from "./myPostForm/my_post_form";
import MyPostReduxForm from "./myPostForm/my_post_form";
// import {
//     addPostActionCreator,
//     updateNewPostTextActionCreator,
// } from "../../../redax/profile-reducer";

const MyPosts = (props) => {
    const { postData, newPostText } = props;
    const newArrayPostData = postData.map((post) => (
        <Post
            message={post.message}
            likesCount={post.likesCount}
            key={post.id}
        />
    ));

    // const newPostElement = React.createRef(); // Создаем ссылку и привязываем её к textarea, чтобы достучаться до значения

    const onAddPost = () => {
        props.addPost();
        // props.dispatch(addPostActionCreator());
    };

    const onPostChange = (event) => {
        // const text = newPostElement.current.value;
        props.updateNewPostText(event.target.value);
        // let action = { type: "UPDATE-NEW-POST-TEXT", newText: text }; // Сначала создаеи объект потом передаем его
        // props.dispatch(updateNewPostTextActionCreator(text));
    };

    const onSubmit = (myPostData) => {
        console.log(myPostData);
    };

    return (
        <div className={cls.my_post}>
            <h2>My post</h2>
            <MyPostReduxForm
                onSubmit={onSubmit}
                newPostText={newPostText}
                onPostChange={onPostChange}
                onAddPost={onAddPost}
            />

            {/* <div className={cls.new_post}>
                <textarea
                    name=""
                    id=""
                    rows="5"
                    // ref={newPostElement}
                    value={newPostText}
                    onChange={onPostChange}
                />
                <button onClick={onAddPost}>Add post</button>
            </div> */}
            <div className={cls.posts}>{newArrayPostData}</div>
        </div>
    );
};

export default MyPosts;
