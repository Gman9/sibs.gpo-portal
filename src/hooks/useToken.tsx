import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = tokenString !== null ? JSON.parse(tokenString) : null;
        return tokenString;
    };
    const [token, setToken] = useState(getToken());

    const saveToken = (userToken: any) => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token: token,
    };
}
