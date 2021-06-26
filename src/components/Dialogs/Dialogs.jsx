import React from 'react';
import style from './Dialogs.module.css';
import {NavLink, Redirect} from 'react-router-dom';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

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

/*    let onSendMessageClick = () => {
        props.SendMessage();
    };*/
/*    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };*/
    let addNewMessage = (values) => {
        /*alert(values.newMessageBody);*/
        props.SendMessage(values.newMessageBody);
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
            {/*<AddMessageFormRedux onSubmit={addNewMessage}/>*/}
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    );
};

/*const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            {/!*<textarea ref={newMesssageElement}>new messege</textarea>*!/}
            <Field component="textarea" name="newMessageBody" placeholder="Enter your message"></Field>
            {/!*<textarea value={newMessageBody} placeholder='enter your message' onChange={onNewMessageChange}></textarea>*!/}
        </div>
    <div>
        <button>send</button>
    </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogsAddMessageForm"})(AddMessageForm);*/

export default Dialogs;