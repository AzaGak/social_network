import React from "react";
import Header from "./header";
import { auth } from "../../redax/auth-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.auth();
    }
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

// export default connect(mapStateToProps, { auth })(HeaderContainer);
export default compose(connect(mapStateToProps, { auth }))(HeaderContainer);
