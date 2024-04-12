import cls from "./messageItem.module.css";

const MessageItem = (props) => {
    return <div className={cls.message}>{props.message}</div>;
};

export default MessageItem;
