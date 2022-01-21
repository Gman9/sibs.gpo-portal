import React from 'react';
import { BrowserRouter, Redirect, Route, Switch, Router } from 'react-router-dom';
import history from './history';
import Login from './pages/Login/Login';
import RequestOpen from './pages/Requests/RequestOpen';
import DevicesManagement from './pages/DevicesManagement/DevicesManagement';

export default function Routes() {
    return (
        /* <Router history={history}> */
        <BrowserRouter>
            <Switch>
                <Route path="/" component={DevicesManagement} />
                <Route path="/devices" component={DevicesManagement} />
                <Route path="/requests/inProgress/authorized" component={RequestOpen} />
                <Route exact={true} path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
        /* </Router> */
    );
}
