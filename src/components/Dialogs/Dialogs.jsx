import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.activeLink}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return(
            <div className={style.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let dialogs = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messages = props.messagesData.map(message => <Message message={message.message} id={message.id} />);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogs}
            </div>
            <div className={style.messages}>
                {messages}
            </div>
        </div>
    );
};

export default Dialogs;