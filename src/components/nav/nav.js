import { NavLink } from "react-router-dom";
import cls from "./nav.module.css";
// import Friends from "../friends/friends";

const Nav = (props) => {
    return (
        <nav className={cls.nav}>
            <div>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? cls.active : cls.nav_link
                    }
                    to="/profile"
                >
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? cls.active : cls.nav_link
                    }
                    to="/dialogs"
                >
                    Messages
                </NavLink>
            </div>
            <div>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? cls.active : cls.nav_link
                    }
                    to="/news"
                >
                    News
                </NavLink>
            </div>
            <div>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? cls.active : cls.nav_link
                    }
                    to="/music"
                >
                    Music
                </NavLink>
            </div>
            <div>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? cls.active : cls.nav_link
                    }
                    to="/settings"
                >
                    Settings
                </NavLink>
            </div>
            <div>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? cls.active : cls.nav_link
                    }
                    to="/friends"
                >
                    Friends
                </NavLink>
            </div>
            <div>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? cls.active : cls.nav_link
                    }
                    to="/users"
                >
                    Find Users
                </NavLink>
            </div>
            {/* <Friends state={props.state} /> */}
        </nav>
    );
};

export default Nav;
