const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hi, how are you" },
        { id: 3, message: "Hi, how old are you" },
    ],
    newMessageText: "it-kamasutra.com1",
    dialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "John" },
        { id: 5, name: "Arnold" },
    ],
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const { messagesData, newMessageText } = state;
            const newMessage = {
                id: 7, //(messagesData[messagesData.length - 1].id += 1), // Добавляем + 1 к последнему id в массиве
                message: newMessageText,
            };
            return {
                ...state,
                newMessageText: "",
                messagesData: [...messagesData, newMessage],
            };
        // stateCopy.messagesData.push(newMessage);
        // messagesData.push(newMessage);
        // state.newMessageText = "";
        // stateCopy.newMessageText = "";
        // return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            // state.newMessageText = action.newText;
            // let stateCopy = { ...state };
            // stateCopy.newMessageText = action.newText;
            // return state;
            return { ...state, newMessageText: action.newText };
        // stateCopy.newMessageText = action.newText;

        default:
            return state;
    }
};

const addMessageActionCreator = () => {
    const action = { type: ADD_MESSAGE };
    return action;
};

const onMessageChangeActionCreator = (text) => {
    const action = { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
    return action;
};

export { addMessageActionCreator, onMessageChangeActionCreator };

export default messageReducer;
