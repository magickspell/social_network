import {authAPI, securityAPI} from "../api/api";
import {Redirect} from "react-router-dom";
import React from "react";
import {stopSubmit} from "redux-form";

/*const SET_USER_DATA = 'SET_USER_DATA';*/
const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null //if null, captcha is not required
    /*isFetching: false*/
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
})

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        //success get auth data
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer;