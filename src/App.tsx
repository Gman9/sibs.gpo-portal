import React from 'react';
import Routes from './Routes';
import Login from './pages/Login/Login';
import useToken from './hooks/useToken';
import { ModalProvider } from './contexts/ModalContext/ModalContext';
import ModalRoot from './contexts/ModalContext/ModalRoot';

import './App.scss';

function App() {
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return (
        <ModalProvider>
            <ModalRoot />
            <Routes />
        </ModalProvider>
    );
}

export default App;
