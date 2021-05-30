import profileReducer from "./profile-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            messages_post_Data: [
                {id: 1, message: "hello", like: 3},
                {id: 1, message: "hi", like: 2},
                {id: 1, message: "leatherman", like: 0}
            ],
            newPostText: "flux samurai"
        },
        messagesPage: {
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
            newMessageBody: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }, /*грубо говоря сюда прилетает ререндер из индекса и подменяет его через обсервер*/
    dispatch(action) { //types add-post and so on
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = profileReducer(this._state.messagesPage, action);
        this._state.sidebar = profileReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}


export const addPostActionCreater = () => ({type: ADD_POST})
export const updateNewPostTextActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


window.store = store;
export default store;