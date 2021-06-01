import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import My_Post from "./My_Post";
import StoreContext from "../../../StoreContext";


const My_PostContainer = (props) => {

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

}


export default My_PostContainer;