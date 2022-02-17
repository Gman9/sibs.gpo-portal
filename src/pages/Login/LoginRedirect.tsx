import React, { useEffect } from 'react';
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom';

const LoginRedirect = () => {
    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        debugger;
        const state = new URLSearchParams(location.search).get('state') === 'xpto-random';
        window.parent.postMessage({ state: 'xpto' });
        console.log(location, 'Login redirect XPTO');
    });

    return (
        <div>
            <p>{new URLSearchParams(location.search).get('state')}</p>
            <p>{new URLSearchParams(location.search).get('code')}</p>
            <div>TODO LOADING</div>
        </div>
    );
};

export default LoginRedirect;
