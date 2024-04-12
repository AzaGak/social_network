import cls from "./friends.module.css";

const Friends = (props) => {
    const { dialogsData } = props.state; // messagePage
    const friends = dialogsData.slice(1, -1).map((name) => (
        <div>
            <div className={cls.friend_avatar}>
                <img
                    src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                    alt="friend_avatar"
                />
            </div>
            {name.name}
        </div>
    ));
    return <div className={cls.friend_name_wrapper}>{friends}</div>;
};

export default Friends;
