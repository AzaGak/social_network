import { Field, reduxForm } from "redux-form";
import cls from "./loginForm.module.css";
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={cls.form_wrapper}>
            <div>
                <Field
                    component={"input"}
                    type="text"
                    placeholder="login"
                    className={cls.input_form}
                    name={"login"}
                />
            </div>
            <div>
                <Field
                    component={"input"}
                    type="text"
                    placeholder="password"
                    className={cls.input_form}
                    name={"password"}
                />
            </div>
            <div className={cls.check_wrapper}>
                <Field
                    component={"input"}
                    type="checkbox"
                    name={"rememberMe"}
                />
                remember me
            </div>
            <div className={cls.btn_wrapper}>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: "login",
})(LoginForm);

export default LoginReduxForm;
