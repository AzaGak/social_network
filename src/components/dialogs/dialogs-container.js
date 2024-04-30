import {
    addMessageActionCreator,
    onMessageChangeActionCreator,
} from "../../redax/message-reducer";
import Dialogs from "./dialogs";
// import StoreContext from "../../storeContext";
import { connect } from "react-redux";

// const DialogsContainer = (props) => {
//     // const state = props.store.getState().messagePage;
//     // const { dispatch } = props.store;

//     // const addMessage = () => {
//     //     dispatch(addMessageActionCreator());
//     // };

//     // const onMessageChange = (text) => {
//     //     dispatch(onMessageChangeActionCreator(text));
//     // };

//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const state = store.getState().messagePage;
//                 const { dispatch } = store;

//                 const addMessage = () => {
//                     dispatch(addMessageActionCreator());
//                 };

//                 const onMessageChange = (text) => {
//                     dispatch(onMessageChangeActionCreator(text));
//                 };
//                 return (
//                     <Dialogs
//                         onMessageChange={onMessageChange}
//                         addMessage={addMessage}
//                         messagePage={state}
//                     />
//                 );
//             }}
//         </StoreContext.Consumer>
//     );
// };

const mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
        isAuth: state.auth.isAuth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
