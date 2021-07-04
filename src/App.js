import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
/*import DialogsContainer from "./components/Dialogs/DialogsContainer";*/
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer.jsx"));
/*import ProfileContainer from "./components/Content/ProfileContainer";*/
const ProfileContainer = React.lazy(() => import("./components/Content/ProfileContainer"));

/*suspense must be, to see loading div use slow 3g*/


class App extends React.Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert("some error occurred");

    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>

                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={"/profile"}/>}/>

                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}
                        />

                        <Route path='/profile/:userId?'
                               render={() => {
                                   return <Suspense fallback={<div>Loading...</div>}>
                                       <ProfileContainer/>
                                   </Suspense>
                               }}/>

                        <Route path='/music' component={Music}/>

                        <Route path='/settings' component={Settings}/>

                        <Route path='/news' component={News}/>

                        <Route path='/users' render={() => <UsersContainer/>}/>

                        <Route exact path='/login'
                               render={() => <LoginPage/>}/>
                        <Route path='/login/facebook'
                               render={() => <div>FACEBOOK</div>}/>

                        <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        initialized: state.app.initialized
    }
)

/*export default connect(mapStateToProps, {initializeApp})(App);*/

/*export default App;*/
//export default App; this is a comment

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


const SamuraiJSApp = (props) => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;