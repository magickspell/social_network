import React from 'react';
import style from './Profile.module.css';
import My_Post from './My_Post/My_Post.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={style.content}>
            <ProfileInfo/>
            <My_Post messages_post_Data={props.profilePage.messages_post_Data}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>
        </div>
    );
}

export default Profile;