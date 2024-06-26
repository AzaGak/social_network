const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hi, how are you" },
        { id: 3, message: "Hi, how old are you" },
    ],
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
            const { messagesData } = state;
            const newMessage = {
                id: 7, //(messagesData[messagesData.length - 1].id += 1), // Добавляем + 1 к последнему id в массиве
                // message: newMessageText,
                message: action.newMessageText,
            };
            return {
                ...state,
                messagesData: [...messagesData, newMessage],
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return { ...state, newMessageText: action.newText };

        default:
            return state;
    }
};

const addMessageActionCreator = (newMessageText) => {
    const action = { type: ADD_MESSAGE, newMessageText };
    return action;
};

const onMessageChangeActionCreator = (text) => {
    const action = { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
    return action;
};

export { addMessageActionCreator, onMessageChangeActionCreator };

export default messageReducer;
