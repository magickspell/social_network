import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, ...state}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }

    return (
        <div className={style.content}>
            <div className={style.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={style.mainPhoto}/>
                {isOwner && <div><input type={"file"} onChange={onMainPhotoSelected}/></div>}
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div> {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div><b>Full name:</b> {profile.fullName}</div>
        <div><b>Looking job:</b> {profile.lookingForAJob ? "yes" : "no"}</div>
        <div><b>Skills:</b> {profile.lookingForAJobDescription}</div>
        <div><b>About me:</b> {profile.aboutMe}</div>
        <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={style.contact}><i>{contactTitle}: </i>{contactValue}</div>
}

export default ProfileInfo;