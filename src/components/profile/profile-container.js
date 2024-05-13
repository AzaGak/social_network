import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Profile from "./profile";
import { profileThunk, updateStatus } from "../../redax/profile-reducer";
// import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />;
    };
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.profileThunk(this.props.match);
    }
    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

// let AuthRedirectContainer = withAuthRedirect(ProfileContainer);
// const WithUrlDataContainerComponent = withRouter(AuthRedirectContainer);

export default compose(
    connect(mapStateToProps, { profileThunk, updateStatus }),
    withRouter
    // withAuthRedirect
)(ProfileContainer);
