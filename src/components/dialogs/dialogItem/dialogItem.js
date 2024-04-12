import { NavLink } from "react-router-dom";
import cls from "./dialogItem.module.css";

const DialogItem = (props) => {
    const { name } = props; // деструктуризация выташил name из props,
    const path = `/dialogs/${props.id}`;
    return (
        <div className={cls.name_wrapper}>
            <div className={cls.name_avatar}>
                <img
                    src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                    alt="avatar-name"
                />
            </div>
            <NavLink
                className={(navData) =>
                    navData.isActive ? cls.active : cls.dialog
                }
                to={path}
            >
                {name}
            </NavLink>
        </div>
    );
};

export default DialogItem;
