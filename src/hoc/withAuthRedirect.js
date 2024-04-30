import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => ({ isAuth: state.auth.isAuth });

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={"/login"} />;
            return <Component {...this.props} />;
        }
    }

    let ConnectAuthRedirectContainer = connect(mapStateToPropsForRedirect)(
        RedirectComponent
    );
    return ConnectAuthRedirectContainer;
};

export default withAuthRedirect;
