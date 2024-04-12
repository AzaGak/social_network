import cls from "./post.module.css";

const Post = (props) => {
    return (
        <div className={cls.post}>
            <img
                src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                alt="post_avatar"
            />
            {props.message}
            <span>like: {props.likesCount}</span>
        </div>
    );
};

export default Post;
