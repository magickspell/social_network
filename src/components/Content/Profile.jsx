import React from 'react';
import style from './Profile.module.css';
import My_Post from './My_Post/My_Post.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import My_PostContainer from "./My_Post/My_PostContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {

    return (
        <div /*className={style.content}*/>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
            />
            <My_PostContainer/>
        </div>
    );
}

export default Profile;