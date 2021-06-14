import React from 'react';
import style from './Profile.module.css';
import My_Post from './My_Post/My_Post.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import My_PostContainer from "./My_Post/My_PostContainer";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
    });}

    render() {
        return (
                <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);