import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";
import style from './ProfileInfo.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            {<div>
                <button>save</button>
            </div>}
            {error && <div className={style.formSummaryError}>{error}</div> }

            <div><b>Full name:</b> {createField("Full name", "fullName", [], Input)}
            </div>
            <div><b>Looking job:</b> {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <b>Skills:</b> {createField("Skills", "lookingForAJobDescription", [], Textarea)}
            <div><b>About me:</b> {createField("About Me", "aboutMe", [], Textarea)}
            </div>
            <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={style.contact}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
            </div>
        </div>
    </form>
}

const ProfileDataFormRedux = reduxForm({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormRedux;