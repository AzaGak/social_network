// import MyPosts from "./myposts/mypost";
import MyPostsContainer from "./myposts/mypost-container";
import ProfileInfo from "./profile_info/profile_info";

const Profile = (props) => {
    // const { postData, newPostText } = props.state; // props.profilePage дастаю из пропса postData

    return (
        <main>
            <ProfileInfo profile={props.profile} />
            {/* <MyPosts
                postData={postData}
                newPostText={newPostText}
                // addPost={props.addPost}
                // updateNewPostText={props.updateNewPostText}
                dispatch={props.dispatch}
            /> */}
            <MyPostsContainer
            // store={props.store}
            />
        </main>
    );
};

export default Profile;
