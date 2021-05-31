import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import My_Post from "./My_Post";



const My_PostContainer = (props) => {
debugger

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<My_Post updateNewPostText={onPostChange} addPost={addPost} messages_post_Data={state.profilePage.messages_post_Data}/>);
}


export default My_PostContainer;