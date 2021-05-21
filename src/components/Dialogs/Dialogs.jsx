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
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name="Shomen" id="1"/>
                <DialogItem name="Mage" id="2"/>
                <DialogItem name="Samurai" id="3"/>
                <DialogItem name="Programmer" id="4"/>
            </div>
            <div className={style.messages}>
                <Message message={"Hi"} />
                <Message message={"wake up Samurai"} />
                <Message message={"no please"} />
            </div>
        </div>
    );
};

export default Dialogs;