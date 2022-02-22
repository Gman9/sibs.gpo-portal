import React, { useContext } from 'react';
import welcome from '../../assets/imgs/gpo-welcome.png';
import EMIS from '../../assets/imgs/EMIS.png';
import { UserSessionContext } from '../../services/UserSession';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Buttons/Button';
import { TypeLogin } from './types';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import './Login.scss';
import { GrantTokenImplementationGrantTypeEnum, TokenApi } from '../../api/generated/gpo';

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
    const keycloakClient = axios.create(); // apenas para testes com keycloak local
    const UserSession = useContext(UserSessionContext);
    window.addEventListener(
        'message',
        (event) => {
            if (event.data.state === 'todo-keycloak-state-generator-uuid') {
                keycloakClient
                    .post(
                        `${window.KEYCLOAK_BASE_URL}/token`,
                        new URLSearchParams({
                            code: event.data.code,
                            client_id: window.KEYCLOAK_CLIENT_ID,
                            client_secret: window.KEYCLOAK_CLIENT_SECRET,
                            grant_type: window.KEYCLOAK_GRANT_TYPE,
                        }),
                        {
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        },
                    )
                    .then((resp) => {
                        /*UserSession.setToken(resp.data);*/
                        setToken(resp.data as any);
                        /* setToken({
                            access_token:
                                'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzOWdMRl8zTEIxemlXb3VIU1g5N19aWkYwY01sandVXzU4REYzTDZyWGZVIn0.eyJleHAiOjE2NDU1ODQxODksImlhdCI6MTY0NTU0ODE4OSwianRpIjoiM2M2NDYxMmEtNWVjYS00MzJmLWJhMTUtYjkyMjM2N2U2MDZlIiwiaXNzIjoiaHR0cHM6Ly9seGludGRldjE5Ojg1NDMvYXV0aC9yZWFsbXMvR1BPIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJhMzVlZTUzLTE5NjktNDBlMS04MGIwLTFiNTQzZGU0NjE5OSIsInR5cCI6IkJlYXJlciIsImF6cCI6Imdwby1hcGktZGV2Iiwic2Vzc2lvbl9zdGF0ZSI6ImJjODVjMzU2LTg1ZGItNDZkOS1iNmE4LWRiZDMwZTk0MjExMSIsImFjciI6IjEiLCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJncG8tc2NvcGUgcHJvZmlsZSBlbWFpbCIsInNpZCI6ImJjODVjMzU2LTg1ZGItNDZkOS1iNmE4LWRiZDMwZTk0MjExMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWdwbyIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJBRE1JTiJdLCJuYW1lIjoiR29uY2FsbyBOdW5lcyIsInJlc291cmNlcyI6W3siYWN0aXZlIjp0cnVlLCJpZGVudGlmaWVyIjoyMX0seyJhY3RpdmUiOnRydWUsImlkZW50aWZpZXIiOjIwfSx7ImFjdGl2ZSI6dHJ1ZSwiaWRlbnRpZmllciI6NjZ9XSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZ29uY2Fsby5udW5lc0BzaWJzLnB0IiwiZ2l2ZW5fbmFtZSI6IkdvbmNhbG8iLCJwcm9jZXNzb3IiOiJFUE1TIiwiZmFtaWx5X25hbWUiOiJOdW5lcyIsInVzZXJJZCI6ImJhMzVlZTUzLTE5NjktNDBlMS04MGIwLTFiNTQzZGU0NjE5OSIsImVtYWlsIjoiZ29uY2Fsby5udW5lc0BzaWJzLnB0IiwiZW5hYmxlZCI6dHJ1ZX0.vCz-zywYkyUPH7LEHl4raJesriu9cqxrTLg6MP_jHt8GS3wLHGUiyYzaFYnlMlZ0B-bAkcMzIs8fzsybXUbbCe6vcWTF0HR1IT0XL5s8KukhkPYA4JgicHPG5_hswAgZaPfFWmXnAnm4lKtlYR-LS_sdhSllbFYs9WV1lU2_qHFIJ410BO5IBR4t_MmFdJT7hUVPiwLUD3bdqtwFJ3qzu0P9byPJhSeBN0AfzFuyTy9JWyVEdCr8xtzqdLug6lrNq5wRUfw0UyEPTI6AWxXgAC06SWTY9zn3ercbJSC0oth2Vqm_ns19g2tVwPqlJcOErgwGFtvtqI5jYL-_bnfU6Q',
                            refresh_token:
                                'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwZjgyNDdjNC1jMjgwLTQ2ZmItYmEzNS0xZWJlY2QyMzk1YjIifQ.eyJleHAiOjE2NDU1NDk5ODksImlhdCI6MTY0NTU0ODE4OSwianRpIjoiM2E5NWE5MTQtOWQzZS00ZTk4LTlmMGMtZDAwNjMwNTRlMDBiIiwiaXNzIjoiaHR0cHM6Ly9seGludGRldjE5Ojg1NDMvYXV0aC9yZWFsbXMvR1BPIiwiYXVkIjoiaHR0cHM6Ly9seGludGRldjE5Ojg1NDMvYXV0aC9yZWFsbXMvR1BPIiwic3ViIjoiYmEzNWVlNTMtMTk2OS00MGUxLTgwYjAtMWI1NDNkZTQ2MTk5IiwidHlwIjoiUmVmcmVzaCIsImF6cCI6Imdwby1hcGktZGV2Iiwic2Vzc2lvbl9zdGF0ZSI6ImJjODVjMzU2LTg1ZGItNDZkOS1iNmE4LWRiZDMwZTk0MjExMSIsInNjb3BlIjoiZ3BvLXNjb3BlIHByb2ZpbGUgZW1haWwiLCJzaWQiOiJiYzg1YzM1Ni04NWRiLTQ2ZDktYjZhOC1kYmQzMGU5NDIxMTEifQ.D4sGF5b-NpDs0VAN6-9_2u1luNRhsegnfk7cu5uoI4c',
                            expires_in: 36000,
                            refresh_expires_in: 1800,
                            token_type: 'Bearer',
                        } as any); */
                        history.push('/devices');
                        /*requestTokenGPO(keycloakClient, setToken);*/
                        console.log(resp);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
        false,
    );

    const requestTokenGPO = (keycloakClient: any, setToken: any) => {
        const apiTokens = new TokenApi(undefined, '/gpo', axios.create());
        apiTokens
            .createTokenInfo({
                grantType: GrantTokenImplementationGrantTypeEnum.OFFLINE,
                clientId: window.GPO_PORTAL_CLIENT_ID,
                clientSecret: window.GPO_PORTAL_CLIENT_SECRET,
                userEmail: window.GPO_PORTAL_USER_EMAIL,
            })
            .then((resp) => {
                /*UserSession.setToken(resp.data);*/
                setToken(resp.data as any);
                console.log(resp);
                history.push('/devices');
            })
            .catch((err) => {
                console.log(err);
            });
    };

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
                            src={`${window.KEYCLOAK_BASE_URL}/auth?client_id=${window.KEYCLOAK_CLIENT_ID}&response_type=code&state=todo-keycloak-state-generator-uuid`}
                            width="100%"
                            height="100%"
                            title="keycloak-login"
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
    /*const UserSession = useContext(UserSessionContext);*/
    return (
        <div className="container h-100 bg-white" style={{ width: '430px' }}>
            <div className="d-flex justify-content-center h-100">
                <button
                    type="button"
                    className="btn btn-primary btn-lg align-self-center"
                    onClick={() => {
                        /*UserSession.signIn();*/
                        history.push('/');
                    }}
                >
                    Let me in!
                </button>
            </div>
        </div>
    );
}

export default Login;
