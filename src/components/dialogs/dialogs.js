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
    const { dialogsData, messagesData } = props.messagePage; // дастаю из пропса dialogsData и messageData

    const newArrayDialogs = dialogsData.map((name) => (
        <DialogItem name={name.name} id={name.id} key={name.id} />
    ));

    const newArrayMessages = messagesData.map((message) => (
        <MessageItem message={message.message} key={message.id} />
    ));

    // const newMessageElement = React.createRef();

    const onAddMessage = (values) => {
        props.addMessage(values.newMessageText);
    };

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogs_items}>{newArrayDialogs}</div>

            <div className={cls.messages}>
                {newArrayMessages}
                <DialogsReduxForm onSubmit={onAddMessage} />
            </div>
        </div>
    );
};

export default Dialogs;
