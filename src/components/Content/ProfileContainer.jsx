import React from 'react';
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
/*    (props) => {
    if (!this.props.isAuth) return <Redirect to={"/login"}/>;
    return <ProfileContainer {...props} />
}*/

/*let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});
AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);*/


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);