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
    return (
        <div className={style.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let newMesssageElement = React.createRef();

    let addMessage = () => {
        let text = newMesssageElement.current.value;
        alert(text);
    }

    let dialogs = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messages = props.state.messagesData.map(message => <Message message={message.message} id={message.id}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogs}
            </div>
            <div className={style.messages}>
                {messages}
            </div>
            <div>
                <textarea ref={newMesssageElement}>new messege</textarea>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    );
};

export default Dialogs;