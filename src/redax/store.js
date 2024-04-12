import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: "Hi how are you?", likesCount: 3 },
                { id: 2, message: "It`s my first post", likesCount: 7 },
            ],
            newPostText: "it-kamasutra.com",
        },
        messagePage: {
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
        },

        sidebar: {},

        // src: {
        //     name_avatar: [
        //         {
        //             id: 1,
        //             srcAvatar:
        //                 "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        //         },
        //     ],
        // },
    },
    _callSubscriber() {
        console.log("State is change");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addPost() {
    //     const { postData, newPostText } = this._state.profilePage;
    //     const newPost = {
    //         id: 1,
    //         message: newPostText,
    //         likesCount: 0,
    //     };

    //     postData.push(newPost);
    //     this._state.profilePage.newPostText = "";
    //     this._callSubscriber(this._state); // Запускается занова render через renderEntireTree(state) и передается обновленный state. Далее эта функция вызывается index.js
    // },
    // addMessage() {
    //     const { messagesData, newMessageText } = this._state.messagePage;
    //     const newMessage = {
    //         id: 1,
    //         message: newMessageText,
    //     };

    //     messagesData.push(newMessage);
    //     this._state.messagePage.newMessageText = "";
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageText(newText) {
    //     this._state.messagePage.newMessageText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        );

        this._state.messagePage = messageReducer(
            this._state.messagePage,
            action
        );

        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

// let renderEntireTree = () => {
//     console.log("State is change");
// };

// const state = {
//     profilePage: {
//         postData: [
//             { id: 1, message: "Hi how are you?", likesCount: 3 },
//             { id: 2, message: "It`s my first post", likesCount: 7 },
//         ],
//         newPostText: "it-kamasutra.com",
//     },
//     messagePage: {
//         messagesData: [
//             { id: 1, message: "Hi" },
//             { id: 2, message: "Hi, how are you" },
//             { id: 3, message: "Hi, how old are you" },
//         ],
//         newMessageText: "it-kamasutra.com",
//         dialogsData: [
//             { id: 1, name: "Dimych" },
//             { id: 2, name: "Andrey" },
//             { id: 3, name: "Sveta" },
//             { id: 4, name: "John" },
//             { id: 5, name: "Arnold" },
//         ],
//     },

//     src: {
//         name_avatar: [
//             {
//                 id: 1,
//                 srcAvatar:
//                     "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
//             },
//         ],
//     },
// };

// const addPost = () => {
//     const { postData, newPostText } = state.profilePage;
//     const newPost = {
//         id: 1,
//         message: newPostText,
//         likesCount: 0,
//     };

//     postData.push(newPost);
//     state.profilePage.newPostText = "";
//     renderEntireTree(state); // Запускается занова render через renderEntireTree(state) и передается обновленный state. Далее эта функция вызывается index.js
// };

// const addMessage = () => {
//     const { messagesData, newMessageText } = state.messagePage;
//     const newMessage = {
//         id: 1,
//         message: newMessageText,
//     };

//     messagesData.push(newMessage);
//     state.messagePage.newMessageText = "";
//     renderEntireTree(state);
// };

// const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     renderEntireTree(state);
// };

// const updateNewMessageText = (newText) => {
//     state.messagePage.newMessageText = newText;
//     renderEntireTree(state);
// };

// const suscribe = (observer) => {
//     renderEntireTree = observer;
// };

// export {
//     addPost,
//     addMessage,
//     updateNewPostText,
//     updateNewMessageText,
//     suscribe,
// };
// export default state;
export default store;

// window.store = store;
