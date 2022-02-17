import React from 'react';
import { BrowserRouter, Redirect, Route, Switch, Router } from 'react-router-dom';
import history from './history';
import Login from './pages/Login/Login';
import LoginRedirect from './pages/Login/LoginRedirect';
import RequestOpen from './pages/Requests/RequestOpen';
import DevicesManagement from './pages/DevicesManagement/DevicesManagement';
import NavBarDefault from './components/NavBar/NavBarDefault';
/* /login-redirect/:code/:state */

export default function Routes() {
    return (
        /*         <Router history={history}>
         */ <BrowserRouter>
            <Switch>
                <Route exact={true} path="/login-redirect" component={LoginRedirect} />
                <Route exact={true} path="/login" component={Login} />
                <Route component={WithNavbar} />
                {/* <Route path="/" component={DevicesManagement} />
                <Route path="/devices" component={DevicesManagement} />
                <Route path="/requests/inProgress/authorized" component={RequestOpen} /> */}
            </Switch>
        </BrowserRouter>
        /*         </Router>
         */
    );
}

const WithNavbar = () => (
    <>
        <NavBarDefault />
        <Switch>
            <Route path="/" component={DevicesManagement} />
            <Route path="/devices" component={DevicesManagement} />
            <Route path="/requests/inProgress/authorized" component={RequestOpen} />
        </Switch>
    </>
);
