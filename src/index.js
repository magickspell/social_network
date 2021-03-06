import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import SamuraiJSApp from "./App";

/*let rerenderEntireTree = () => {*/
    ReactDOM.render(
/*        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>,*/ <SamuraiJSApp />, document.getElementById('root'));




/*rerenderEntireTree(store.getState());
rerenderEntireTree(); /!*DIMICH*!/*/

/*store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
}); /!*example of callback*!/*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
