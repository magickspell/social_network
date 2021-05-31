const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: "Shomen"}, /*это объект dialog*/
        {id: 2, name: "Mage"},
        {id: 3, name: "Samurai"},
        {id: 4, name: "Programer"}
    ],

    messagesData: [
        {id: 1, message: "Hi"}, /*это объект message*/
        {id: 2, message: "wake up Samurai"},
        {id: 3, message: "no please"},
        {id: 4, message: "yes"}
    ],
    newMessageBody: ``
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;