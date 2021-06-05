import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import My_Post from "./My_Post";
import {connect} from "react-redux";


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