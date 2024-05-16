import { Field, reduxForm } from "redux-form";
import cls from "../../myposts/mypost.module.css";
const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={cls.new_post}>
                <Field
                    component={"textarea"}
                    name={"mypost"}
                    id=""
                    rows="5"
                    value={props.newPostText}
                    onChange={props.onPostChange}
                />
                <button onClick={props.onAddPost}>Add post</button>
            </div>
        </form>
    );
};

const MyPostReduxForm = reduxForm({ form: "mypost" })(MyPostForm);

export default MyPostReduxForm;
