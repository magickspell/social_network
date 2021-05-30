const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    messages_post_Data: [
        {id: 1, message: "hello", like: 3},
        {id: 1, message: "hi", like: 2},
        {id: 1, message: "leatherman", like: 0}
    ],
    newPostText: "flux samurai"
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            state.messages_post_Data.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
};

export default profileReducer;