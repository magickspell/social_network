import React from 'react';
import style from './Dialogs.module.css';
import {NavLink, Redirect} from 'react-router-dom';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

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

    let state = props.dialogsData;

    let newMesssageElement = React.createRef();

    let addMessage = () => {
        let text = newMesssageElement.current.value;
        alert(text);
    }

    let dialogs = props.messagesPage.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messages = props.messagesPage.messagesData.map(message => <Message message={message.message} key={message.id} id={message.id}/>);
    let newMessageBody = props.messagesPage.newMessageBody;

    let onSendMessageClick = () => {
        props.SendMessage();
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    if (!props.isAuth) return <Redirect to={"/login"}/>;

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