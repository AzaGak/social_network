import React from "react";
import Header from "./header";
import { setAuthUserData } from "../../redax/auth-reducer";

import axios from "axios";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
            })
            .then((responce) => {
                if (responce.data.resultCode === 0) {
                    const { id, email, login } = responce.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
