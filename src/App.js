import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header";
import Profile from "./components/profile/profile";
import Nav from "./components/nav/nav";
// import Dialogs from "./components/dialogs/dialogs";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import DialogsContainer from "./components/dialogs/dialogs-container";
import UsersContainer from "./components/users/users-container";

// import Friends from "./components/friends/friends";

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>it-kamasutra.com</p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

const App = (props) => {
    // const { messagesData, dialogsData } = props.state.messagePage;
    // const { postData } = props.state.profilePage;
    // const { messagePage } = props.state; // Достаю из объекта state пришедчего через props messagePage и profilePage

    return (
        <div className="app-wrapper">
            <Header />
            <Nav
            // state={messagePage}
            />
            <div className="app-wrapper-main">
                <Routes>
                    <Route
                        path="/profile"
                        element={
                            <Profile
                            // postData={postData}
                            // state={profilePage}
                            // dispatch={props.dispatch}

                            // store={props.store}

                            // addPost={props.addPost}
                            // updateNewPostText={props.updateNewPostText}
                            />
                        }
                    />
                    <Route
                        path="/dialogs/*"
                        element={
                            // <Dialogs
                            //     // messagesData={messagesData}
                            //     // dialogsData={dialogsData}
                            //     state={messagePage} // Прокидываю через props дальще
                            //     dispatch={props.dispatch}
                            //     // addMessage={props.addMessage}
                            //     // updateNewMessageText={
                            //     //     props.updateNewMessageText
                            //     // }
                            // />
                            <DialogsContainer
                            // store={props.store}
                            />
                        }
                    />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/users" element={<UsersContainer />} />
                    {/* <Route
                        path="/friends"
                        element={<Friends state={messagePage} />}
                    /> */}
                </Routes>
            </div>
        </div>
    );
};

export default App;
