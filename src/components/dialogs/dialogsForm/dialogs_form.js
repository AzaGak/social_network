import { Field, reduxForm } from "redux-form";
import cls from "../../dialogs/dialogs.module.css";
const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={cls.new_message}>
                <Field
                    component={"textarea"}
                    name={"newMessageText"}
                    id=""
                    rows="5"
                    placeholder={"Enter your message"}
                />
                <button>Add message</button>
            </div>
        </form>
    );
};

const DialogsReduxForm = reduxForm({ form: "dialogsForm" })(DialogsForm);

export default DialogsReduxForm;
