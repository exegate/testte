/* React */
import React from 'react';

/* Components */
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

/* My components */
import Login from './components/Login'
import Registration from './components/Registration'
import Forgetpassword from './components/ForgetPassword';
import FgSuccessful from './components/FgSuccessful';
import LgSuccessful from './components/LgSuccessful';

/* Css */
import './assets/css/App.css';

class App extends React.Component {
    state = {
        
    }
    render() {
        return(
            <Router>
                <div className="App">
                    {this.state.fingerprint}
                    <Switch>
                        <Route exact path="/">
                            <a href='/login'>Sasa</a>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/registration">
                            <Registration/>
                        </Route>
                        <Route path="/forgetpassword">
                            <Forgetpassword/>
                        </Route>
                        <Route path="/fg_successful">
                            <FgSuccessful/>
                        </Route>
                        <Route path="/lg_successful">
                            <LgSuccessful/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
