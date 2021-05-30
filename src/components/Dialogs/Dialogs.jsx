import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";

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
    let state = props.store.getState().dialogsData;

    let newMesssageElement = React.createRef();

    let addMessage = () => {
        let text = newMesssageElement.current.value;
        alert(text);
    }

    let dialogs = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messages = props.state.messagesData.map(message => <Message message={message.message} id={message.id}/>);
    let newMessageBody = props.state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };


    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItems}>
                {dialogs}
            </div>

            <div className={style.messages}>
                {messages}
            </div>
            <div>
                {/*<textarea ref={newMesssageElement}>new messege</textarea>*/}
                <textarea
                    value={newMessageBody}
                    placeholder='enter your message'
                    onChange={onNewMessageChange}></textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>send</button>
            </div>

        </div>
    );
};

export default Dialogs;