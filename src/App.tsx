import React, { useState } from 'react';
import Routes from './Routes';
import Login from './pages/Login/Login';
import useToken from './hooks/useToken';
import { ModalProvider } from './contexts/ModalContext/ModalContext';
import ModalRoot from './contexts/ModalContext/ModalRoot';
import { Container } from 'react-bootstrap';

import './App.scss';

function App() {
    const { token, setToken } = useToken();

    return (
        <ModalProvider>
            <Container fluid className="p-0">
                <ModalRoot />
                <Routes token={token} setToken={setToken} />
            </Container>
        </ModalProvider>
    );
}

export default App;
