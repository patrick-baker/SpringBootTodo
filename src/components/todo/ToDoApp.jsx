import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';


export default function ToDoApp() {
    return (
        <div className="ToDoApp">
            <Router>
                <Switch>
                <Route path="/" exact component={LoginComponent}></Route>
                <Route path="/login" component={LoginComponent} />
                <Route path="/welcome/:name" component={WelcomeComponent} />
                <Route path="" component={ErrorComponent} />
                </Switch>
            </Router>
            {/* <LoginComponent /> */}
        </div>
    )
}



