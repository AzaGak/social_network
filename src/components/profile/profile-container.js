import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Profile from "./profile";
import { profileThunk } from "../../redax/profile-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
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
        // let userId = this.props.match.params.userId;
        // if (!userId) userId = 31130;
        // // axios
        // //     .get(
        // //         `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
        // //     )
        // userAPI.getProfile(userId).then((data) => {
        //     this.props.setUserProfile(data);
        // });
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

// let AuthRedirectContainer = withAuthRedirect(ProfileContainer);
// const WithUrlDataContainerComponent = withRouter(AuthRedirectContainer);

export default compose(
    connect(mapStateToProps, { profileThunk }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
