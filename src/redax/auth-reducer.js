import { authAPI } from "../api/api";
const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data, isAuth: true };
        default:
            return state;
    }
};

const setAuthUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: { userId, email, login },
});

const auth = () => {
    return (dispatch) => {
        authAPI.getMe().then((data) => {
            if (data.resultCode === 0) {
                const { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
    };
};
export default authReducer;
export { auth };
