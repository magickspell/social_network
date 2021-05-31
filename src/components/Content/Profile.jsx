import React from 'react';
import style from './Profile.module.css';
import My_Post from './My_Post/My_Post.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import My_PostContainer from "./My_Post/My_PostContainer";

const Profile = (props) => {

    return (
        <div className={style.content}>
            <ProfileInfo/>
            <My_PostContainer store={props.store} /*messages_post_Data={props.profilePage.messages_post_Data}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}*//>
        </div>
    );
}

export default Profile;