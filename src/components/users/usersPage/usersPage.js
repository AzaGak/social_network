import cls from "./usersPage.module.css";

const UsersPage = (props) => {
    return (
        <span
            className={props.currentPage === props.page && cls.selPage}
            onClick={() => props.onPageChanged(props.page)}
        >
            {props.page}
        </span>
    );
};

export default UsersPage;
