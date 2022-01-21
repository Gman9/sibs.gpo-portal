import React, { useContext } from 'react';

import './Login.scss';
import welcome from '../../assets/imgs/gpo-welcome.png';
import EMIS from '../../assets/imgs/EMIS.png';
import { UserSessionContext } from '../../services/UserSession';
import { useHistory } from 'react-router-dom';
import { Container } from '../../components/layouts/Container/Container';
import { Column } from '../../components/layouts/Columns/Column';
import { Row } from '../../components/layouts/Rows/Row';
import { Button } from '../../components/Buttons/Button';
import { TypeLogin } from './types';

const Login = ({ setToken }: TypeLogin) => {
    return (
        <div className="root">
            <Credentials setToken={setToken} />
            <Footer />
        </div>
    );
};

function Credentials({ setToken }: TypeLogin) {
    const handleClick = async () => {
        //TODO const token = async login to get token;
        console.log(setToken);
        setToken('Static token');
    };

    return (
        <section className="login">
            <Container>
                <Row className="row justify-content-md-center">
                    <Column className="col-md-6 p-0">
                        <img className="img-gpo" src={welcome} alt="Bem-vindo ao GPO" />
                    </Column>
                    <Column className="col-md-6 p-0 mt-3">
                        {/*TODO Create form */}
                        <Button onClick={handleClick}>LOGIN</Button>
                    </Column>
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
