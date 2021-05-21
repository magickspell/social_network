import React from 'react';
import './App.css';
import Profile from './components/Content/Profile.jsx';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/news' component={News}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
//export default App; this is a comment
