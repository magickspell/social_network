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
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },
/*    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 0
        };

        this._state.profilePage.messages_post_Data.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },*/
    subscribe(observer) {
        this._callSubscriber = observer
    }, /*грубо говоря сюда прилетает ререндер из индекса и подменяет его через обсервер*/
    dispatch(action) { //types add-post and so on
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.messages_post_Data.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
        }
    }
}

window.store = store;
export default store;