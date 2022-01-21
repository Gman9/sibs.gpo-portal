import React from 'react';

const UserSession = {
    authenticated: false,
    isAuthenticated() {
        return UserSession.authenticated;
    },
    signIn() {
        UserSession.authenticated = true;
        UserSession.grantedResources = ['66'];
    },
    signOut() {
        UserSession.authenticated = false;
        UserSession.grantedResources = [''];
    },
    grantedResources: [''],
    defaultResource: '66',
};

export const UserSessionContext = React.createContext(UserSession);
