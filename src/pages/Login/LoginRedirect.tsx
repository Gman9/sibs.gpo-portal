import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LoginRedirect = () => {
    const location = useLocation();
    useEffect(() => {
        window.parent.postMessage({
            state: 'todo-keycloak-state-generator-uuid',
            code: new URLSearchParams(location.search).get('code'),
        });
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
