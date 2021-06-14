import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://i.ytimg.com/vi/P3ERFrUU2No/hqdefault.jpg"/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;