import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Content/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
/*import {updateNewPostText} from "./redux/state";*/


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer />}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/news' component={News}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
//export default App; this is a comment
