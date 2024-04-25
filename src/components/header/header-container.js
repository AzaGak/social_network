import React from "react";
import Header from "./header";
import { auth } from "../../redax/auth-reducer";

import { connect } from "react-redux";
// import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.auth();
        // authAPI.getMe().then((data) => {
        //     if (data.resultCode === 0) {
        //         const { id, email, login } = data.data;
        //         this.props.setAuthUserData(id, email, login);
        //     }
        // });
    }
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { auth })(HeaderContainer);
