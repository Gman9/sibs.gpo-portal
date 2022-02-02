import React from 'react';
import Routes from './Routes';
import Login from './pages/Login/Login';
import useToken from './hooks/useToken';
import { ModalProvider } from './contexts/ModalContext/ModalContext';
import ModalRoot from './contexts/ModalContext/ModalRoot';
import { Container } from 'react-bootstrap';
import NavBarDefault from './components/NavBar/NavBarDefault';

import './App.scss';

function App() {
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return (
        <ModalProvider>
            <Container fluid className="p-0">
                <NavBarDefault />
                <ModalRoot />
                <Routes />
            </Container>
        </ModalProvider>
    );
}

export default App;
