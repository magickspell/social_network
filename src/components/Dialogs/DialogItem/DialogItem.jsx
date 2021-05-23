import React from 'react';
import style from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.activeLink}>{props.name}</NavLink>
        </div>
    );
};

const DialogItem = (props) => {

    let dialogsData = [
        {id: 1, name: "Shomen"}, /*это объект dialog*/
        {id: 2, name: "Mage"},
        {id: 3, name: "Samurai"},
        {id:4, name: "Programer"}
        ];

    let messagesData = [
        {id: 1, message: "Hi"}, /*это объект message*/
        {id: 2, message: "wake up Samurai"},
        {id: 3, message: "no please"},
        {id: 4, message: "yes"}
    ];

    let dialogs = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messages = messagesData.map(message => <Message message={message.message} id={message.id} />);

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

export default DialogItem;