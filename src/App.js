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
import LoginPage from "./components/Login/Login";
/*import {updateNewPostText} from "./redux/state";*/
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>

                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>

                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>

                        <Route path='/music' component={Music}/>

                        <Route path='/settings' component={Settings}/>

                        <Route path='/news' component={News}/>

                        <Route path='/users' render={() => <UsersContainer/>}/>

                        <Route path='/login'
                               render={() => <LoginPage/>}/>
                    </div>

                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => (
    {
        initialized: state.app.initialized
    }
)

export default connect(mapStateToProps, {initializeApp})(App);
/*export default App;*/
//export default App; this is a comment
