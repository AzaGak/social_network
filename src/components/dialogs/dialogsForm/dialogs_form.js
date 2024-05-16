import { Field, reduxForm } from "redux-form";
import cls from "../../dialogs/dialogs.module.css";
const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={cls.new_message}>
                <Field
                    component={"textarea"}
                    name={"dialogs"}
                    id=""
                    rows="5"
                    value={props.newMessageText}
                    placeholder={"Enter your message"}
                    onChange={props.onMessageChange}
                />
                <button onClick={props.onAddMessage}>Add message</button>
            </div>
        </form>
    );
};

const DialogsReduxForm = reduxForm({ form: "dialogsForm" })(DialogsForm);

export default DialogsReduxForm;
