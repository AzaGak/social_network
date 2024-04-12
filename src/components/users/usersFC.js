import cls from "./users.module.css";
import UsersItem from "./usersItem/usersItem";
import axios from "axios";
import userPhoto from "../../assets/images/user-avatar.png";

const Users = (props) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then((responce) => {
                    props.setUsers(responce.data.items);
                });

            // props.setUsers([
            //     {
            //         id: 1,
            //         fullName: "Azat Y",
            //         status: "I`m a boss",
            //         photoUrl:
            //             "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
            //         location: { city: "Aktau", country: "Kazakhstan" },
            //         followed: false,
            //     },
            //     {
            //         id: 2,
            //         fullName: "Zura K",
            //         status: "My wife",
            //         photoUrl:
            //             "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
            //         location: { city: "Aktau", country: "Kazakhstan" },
            //         followed: true,
            //     },
            //     {
            //         id: 3,
            //         fullName: "Alikhan J",
            //         status: "My son",
            //         photoUrl:
            //             "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
            //         location: { city: "Aktau", country: "Kazakhstan" },
            //         followed: true,
            //     },
            //     {
            //         id: 4,
            //         fullName: "Bayazid J",
            //         status: "My son",
            //         photoUrl:
            //             "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
            //         location: { city: "Aktau", country: "Kazakhstan" },
            //         followed: true,
            //     },
            //     {
            //         id: 5,
            //         fullName: "Nurgul A",
            //         status: "My sister",
            //         photoUrl:
            //             "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
            //         location: { city: "Egjan", country: "North Cypr" },
            //         followed: true,
            //     },
            // ]);
        }
    };

    const newArrayUsers = props.users.map((user) => (
        <UsersItem
            id={user.id}
            photoUrl={user.photos.small != null ? user.photos.small : userPhoto}
            followed={user.followed}
            unfollow={props.unfollow}
            follow={props.follow}
            key={user.id}
            fullName={user.name}
            status={user.status}
        />
    ));
    return (
        <div className={cls.users}>
            <button onClick={getUsers}>Get Users</button>
            {newArrayUsers}
        </div>
    );
};

export default Users;
