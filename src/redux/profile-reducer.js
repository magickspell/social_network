import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
/*const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';*/
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    messages_post_Data: [
        {id: 1, message: "hello", like: 3},
        {id: 2, message: "hi", like: 2},
        {id: 3, message: "leatherman", like: 0}
    ],
/*    newPostText: "flux samurai",*/
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                like: 0
            };
            return {
                ...state,
                messages_post_Data: [...state.messages_post_Data, newPost],
                newPostText: ''
            };
        }
        /*case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }*/
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST:
            return {...state, messages_post_Data: state.messages_post_Data.filter(p => p.id != action.postId)}
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
/*export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, nexText: text});*/

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    }

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }

export const deletePost = (postId) => ({type: DELETE_POST, postId})

export default profileReducer;