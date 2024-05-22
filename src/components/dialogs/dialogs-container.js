import withAuthRedirect from "../../hoc/withAuthRedirect";
import {
    addMessageActionCreator,
    onMessageChangeActionCreator,
} from "../../redax/message-reducer";
import Dialogs from "./dialogs";
// import StoreContext from "../../storeContext";
import { connect } from "react-redux";
import { compose } from "redux";

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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text));
        },
        addMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText));
        },
    };
};

// const AuthRedirectContainer = withAuthRedirect(Dialogs);

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;
