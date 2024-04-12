import cls from "./header.module.css";

const Header = () => {
    return (
        <header className={cls.header}>
            <img
                className={cls.logo}
                src="https://st2.depositphotos.com/1810600/5838/v/450/depositphotos_58387439-stock-illustration-abstract-vector-logo.jpg"
                alt="logo"
            />
        </header>
    );
};

export default Header;
