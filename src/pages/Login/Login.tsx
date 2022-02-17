import React, { useContext } from 'react';
import welcome from '../../assets/imgs/gpo-welcome.png';
import EMIS from '../../assets/imgs/EMIS.png';
import { UserSessionContext } from '../../services/UserSession';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Buttons/Button';
import { TypeLogin } from './types';
import { Container, Row, Col } from 'react-bootstrap';

import './Login.scss';

const Login = ({ setToken }: TypeLogin) => {
    return (
        <div className="root">
            <Credentials setToken={setToken} />
            <Footer />
        </div>
    );
};

function Credentials({ setToken }: TypeLogin) {
    const history = useHistory();

    window.addEventListener(
        'message',
        (event) => {
            if (event.data.state === 'xpto') {
                debugger;
                history.push('/devices');
                console.log('EVENTO!!!');
            }
        },
        false,
    );

    const handleClick = async () => {
        //TODO const token = async login to get token;
        console.log(setToken);
        setToken('Static token');
    };

    return (
        <section className="login">
            <Container>
                <Row className="justify-content-center">
                    <Col className="col-md-6 p-0">
                        <img className="img-gpo" src={welcome} alt="Bem-vindo ao GPO" />
                    </Col>
                    <Col className="col-md-6 p-0">
                        <iframe
                            src="http://localhost:8080/auth/realms/GPO/protocol/openid-connect/auth?client_id=gpo-portal-react&response_type=code&state=xpto-random"
                            width="100%"
                            height="100%"
                            title="login-xpto"
                            key="ola-adeus"
                        />
                        {/*  <Button className="btn-generic" onClick={handleClick}>
                            LOGIN
                        </Button> */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

function Footer() {
    return (
        <footer id="footer" className="fixed-bottom">
            <div className="d-flex justify-content-center">
                <a href="https://www.emis.co.ao/" target="_blank" rel="noreferrer">
                    <img src={EMIS} alt="EMIS S.A." />
                </a>
            </div>
        </footer>
    );
}

function DummySignIn() {
    const history = useHistory();
    const UserSession = useContext(UserSessionContext);
    return (
        <div className="container h-100 bg-white" style={{ width: '430px' }}>
            <div className="d-flex justify-content-center h-100">
                <button
                    type="button"
                    className="btn btn-primary btn-lg align-self-center"
                    onClick={() => {
                        UserSession.signIn();
                        history.push('/requests/inProgress/authorized');
                    }}
                >
                    Let me in!
                </button>
            </div>
        </div>
    );
}

export default Login;
