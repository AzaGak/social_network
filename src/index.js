// import store from "./redax/store";
import store from "./redax/redux-store";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// import state, { suscribe } from "./redax/state";

// import {
//     addPost,
//     addMessage,
//     updateNewPostText,
//     updateNewMessageText,
// } from "./redax/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

// const renderEntireTree = (state) => {
//     root.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <Provider store={store}>
//                     <App
//                     // state={state}
//                     // dispatch={store.dispatch.bind(store)}
//                     // store={store}

//                     // addPost={store.addPost.bind(store)}
//                     // addMessage={store.addMessage.bind(store)}
//                     // updateNewPostText={store.updateNewPostText.bind(store)}
//                     // updateNewMessageText={store.updateNewMessageText.bind(store)}
//                     />
//                 </Provider>
//             </BrowserRouter>
//         </React.StrictMode>
//     );
// };

// renderEntireTree(store.getState());
// // store.subscribe(renderEntireTree);

// store.subscribe(() => {
//     let state = store.getState();
//     renderEntireTree(state);
// });
