import React from 'react';
import style from './Profile.module.css';
import My_Post from './My_Post/My_Post.jsx';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <My_Post/>
        </div>
    );
}

export default Profile;