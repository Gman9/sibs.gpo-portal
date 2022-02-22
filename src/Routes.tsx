import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch, Router } from 'react-router-dom';
import history from './history';
import Login from './pages/Login/Login';
import LoginRedirect from './pages/Login/LoginRedirect';
import RequestOpen from './pages/Requests/RequestOpen';
import DevicesManagement from './pages/DevicesManagement/DevicesManagement';
import NavBarDefault from './components/NavBar/NavBarDefault';
import { TypeLogin } from './pages/Login/types';

export default function Routes({ token, setToken }: TypeLogin) {
    return (
        /*  <Router history={history}>*/
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/login" component={Login} />
                <Route exact={true} path="/login-redirect" component={LoginRedirect} />

                {!token ? <Login setToken={setToken} /> : <Route component={WithNavbar} />}
            </Switch>
        </BrowserRouter>
        /* </Router>*/
    );
}

const WithNavbar = () => {
    return (
        <>
            <NavBarDefault />
            <Switch>
                <Route path="/" component={DevicesManagement} />
                <Route path="/devices" component={DevicesManagement} />
                <Route path="/requests/inProgress/authorized" component={RequestOpen} />
            </Switch>
        </>
    );
};
