// import MyPosts from "./myposts/mypost";
import MyPostsContainer from "./myposts/mypost-container";
import ProfileInfo from "./profile_info/profile_info";

const Profile = (props) => {
    // const { postData, newPostText } = props.state; // props.profilePage дастаю из пропса postData

    return (
        <main>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </main>
    );
};

export default Profile;
