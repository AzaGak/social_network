import React from "react";
import DialogItem from "./dialogItem/dialogItem";
import MessageItem from "./messageItem/messageItem";
import cls from "./dialogs.module.css";
import DialogsReduxForm from "./dialogsForm/dialogs_form";

// import {
//     addMessageActionCreator,
//     onMessageChangeActionCreator,
// } from "../../redax/message-reducer";

const Dialogs = (props) => {
    const { dialogsData, messagesData, newMessageText } = props.messagePage; // дастаю из пропса dialogsData и messageData

    const newArrayDialogs = dialogsData.map((name) => (
        <DialogItem name={name.name} id={name.id} key={name.id} />
    ));

    const newArrayMessages = messagesData.map((message) => (
        <MessageItem message={message.message} key={message.id} />
    ));

    // const newMessageElement = React.createRef();

    const onAddMessage = () => {
        props.addMessage();
        // props.dispatch({ type: "ADD-MESSAGE" }); // Сразу передаем объект
        // props.dispatch(addMessageActionCreator());
    };

    const onMessageChange = (event) => {
        debugger;
        // const text = newMessageElement.current.value;
        props.onMessageChange(event.target.value);
        // let action = { type: "UPDATE-NEW-MESSAGE-TEXT", newText: text }; // Сначала создаеи объект потом передаем его
        // props.dispatch(onMessageChangeActionCreator(text));
    };

    // if (!props.isAuth) return <Navigate to={"/login"} />;

    const onSubmit = (dialogsFormData) => {
        console.log(dialogsFormData);
    };

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogs_items}>{newArrayDialogs}</div>

            <div className={cls.messages}>
                {newArrayMessages}
                <DialogsReduxForm
                    onSubmit={onSubmit}
                    newMessageText={newMessageText}
                    onMessageChange={onMessageChange}
                    onAddMessage={onAddMessage}
                />
                {/* <div className={cls.new_message}>
                    <textarea
                        name=""
                        id=""
                        rows="5"
                        // ref={newMessageElement}
                        value={newMessageText}
                        placeholder="Enter your message"
                        onChange={onMessageChange}
                    ></textarea>
                    <button onClick={onAddMessage}>Add message</button>
                </div> */}
            </div>
        </div>
    );
};

export default Dialogs;
