import React from 'react';
import { decodeToken } from 'react-jwt';

const UserSession = {
    user: null as any,
    token: '',
    /* onUserChange = (newUser: any) => console.log(newUser),*/
    /* userChanged() {
        this.onUserChange(this.getUser());
    },*/

    setToken(token: any) {
        localStorage.setItem('token', token);
        this.decodeToken();
        /* this.userChanged();*/
    },

    decodeToken() {
        try {
            this.token = localStorage.getItem('token') || '';
            this.user = decodeToken(this.token);
            /* this.userChanged();*/
        } catch (e) {
            this.logout();
        }
    },

    logout() {
        this.user = null;
        this.token = '';
        localStorage.setItem('token', '');
        /* this.userChanged();*/
    },

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        /* return this.user && new Date().getTime() < this.user.exp;*/
    },

    getUser() {
        return this.user;
    },
};

export const UserSessionContext = React.createContext(UserSession);
