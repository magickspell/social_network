import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
/*import StoreContext from "../../StoreContext";*/
import {connect} from "react-redux";

/*const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { store => {
            /!*let state = store.getState().messagesPage;*!/

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            };
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            };
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            SendMessage={onSendMessageClick}
                            messagesPage={store.getState().messagesPage}/>
        }
    }
    </StoreContext.Consumer>
};*/

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator())
        },
        SendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;