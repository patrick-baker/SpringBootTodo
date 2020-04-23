import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';
import ListTodosComponent from './ListTodosComponent';



export default function ToDoApp() {
    return (
        <div className="ToDoApp">
            <HeaderComponent/>
            <Router>
                <Switch>
                <Route path="/" exact component={LoginComponent}></Route>
                <Route path="/login" component={LoginComponent} />
                <Route path="/welcome/:name" component={WelcomeComponent} />
                <Route path="/list" component={ListTodosComponent}/>
                <Route path="" component={ErrorComponent} />
                </Switch>
            </Router>
            <FooterComponent/>
        </div>
    )
}

function HeaderComponent() {
    return(
        <div>
            Header <hr/>
        </div>
    )
}

function FooterComponent() {
    return(
        <div>
            <hr/> Footer
        </div>
    )
}



