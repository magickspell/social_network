import React, {useState} from 'react';
import style from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

/*    let stateWithSetState = useState(false);
    let editMode = stateWithSetState[0];
    let setEditMode = stateWithSetState[1];*/
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
            <div>
                { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "no status"}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input value={status} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}/>
                </div>
                }
            </div>
        );
    }

console.log(ProfileStatusWithHooks.editMode)

export default ProfileStatusWithHooks;