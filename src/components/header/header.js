import { NavLink } from "react-router-dom";
import cls from "./header.module.css";

const Header = (props) => {
    return (
        <header className={cls.header}>
            <img
                className={cls.logo}
                src="https://st2.depositphotos.com/1810600/5838/v/450/depositphotos_58387439-stock-illustration-abstract-vector-logo.jpg"
                alt="logo"
            />
            <div className={cls.login_block}>
                {props.isAuth ? (
                    props.login
                ) : (
                    <NavLink className={cls.log_link} to={"/login"}>
                        Login
                    </NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
