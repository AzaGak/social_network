import LoginReduxForm from "./login_form/login_form";
import cls from "./login.module.css";
const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    };
    return (
        <div className={cls.login_wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default Login;
