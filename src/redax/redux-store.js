import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

const redusers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});
const store = createStore(redusers, applyMiddleware(thunk));

export default store;
