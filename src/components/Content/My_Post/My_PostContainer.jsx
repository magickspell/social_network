import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import My_Post from "./My_Post";
/*import StoreContext from "../../../StoreContext";*/
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";


/*const My_PostContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return <My_Post updateNewPostText={onPostChange}
                                addPost={addPost}
                                messages_post_Data={state.profilePage.messages_post_Data}
                                newPostext={state.profilePage.newPostText}
                />
            }}
        </StoreContext.Consumer>
    );

}*/

const mapStateToProps = (state) => {
    return {
        messages_post_Data: state.profilePage.messages_post_Data,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const My_PostContainer = connect(mapStateToProps, mapDispatchToProps)(My_Post)


export default My_PostContainer;