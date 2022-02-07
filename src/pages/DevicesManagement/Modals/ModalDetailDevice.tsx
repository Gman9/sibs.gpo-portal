import React, { useEffect, useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import { Button } from '../../../components/Buttons/Button';
import IconClose from '../../../assets/imgs/icons/ic-close-blue.svg';
import IconNextActive from '../../../assets/imgs/icons/pagination/ic-arrow-right.svg';
import IconNextInactive from '../../../assets/imgs/icons/pagination/btn-arrowright-inactive.svg';
import IconPrevActive from '../../../assets/imgs/icons/pagination/ic-arrow-left.svg';
import IconPrevInactive from '../../../assets/imgs/icons/pagination/btn-arrowleft-inactive.svg';
import TableLoginHistory from '../Tables/TableLoginHistory';
import { ModalConsumer } from '../../../contexts/ModalContext/ModalContext';
import ModalCancelDevice from '../Modals/ModalCancelDevice';
import { TypeDeviceDetail, TypeModalDetailsDevice } from './types';
import { apiDevices } from '../../../services/Api';
import { Device } from '../../../api/generated/gpm';
import 'moment/locale/pt';
import moment from 'moment';

import './Modal.scss';

const ModalDetailDevice = ({ showModal, onRequestClose, deviceId }: TypeModalDetailsDevice) => {
    const [show, setShow] = useState(true);
    const [page, setPage] = useState(0);
    const [device, setdDvice] = useState<Device | null>(null);

    useEffect(() => {
        apiDevices
            .getDevice(deviceId)
            .then((resp) => {
                setdDvice(resp.data);
                console.log(resp);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Modal show={show} dialogClassName="dialog" contentClassName="d-flex px-5" size="lg">
            <Container>
                <Row className="flex-row-reverse mb-2 mt-5">
                    <Button className="btn-transparent">
                        <img width={18} height={18} src={IconClose} alt="close" onClick={onRequestClose} />
                    </Button>
                </Row>
                {page === 0 && <DeviceDetail device={device} />}
                {page === 1 && <LoginHistory />}

                <Row className="modal-custom-footer w-100 mb-5 justify-content-center">
                    <Col md={2}>
                        <span className="label-move-modal mr-3">DETALHE</span>

                        {page === 1 ? (
                            <Button className="btn-rounded" onClick={() => setPage(0)}>
                                <img width={30} height={30} src={IconPrevActive} alt="next" />
                            </Button>
                        ) : (
                            <Button className="btn-rounded">
                                <img width={30} height={30} src={IconPrevInactive} alt="next" />
                            </Button>
                        )}
                    </Col>
                    <Col md={1} className="d-flex align-items-center justify-content-center">
                        <span className={`dot mini mr-1 ${page === 0 ? 'active' : ''}`}></span>
                        <span className={`dot mini ${page === 1 ? 'active' : ''}`}></span>
                    </Col>
                    <Col md={4}>
                        {page === 0 ? (
                            <Button className="btn-rounded" onClick={() => setPage(1)}>
                                <img width={30} height={30} src={IconNextActive} alt="next" />
                            </Button>
                        ) : (
                            <Button className="btn-rounded">
                                <img width={30} height={30} src={IconNextInactive} alt="next" />
                            </Button>
                        )}
                        <span className="label-move-modal ml-3">HISTÓRICO DE LOGIN</span>
                    </Col>
                </Row>
            </Container>
        </Modal>
    );
};

const DeviceDetail = ({ device }: TypeDeviceDetail) => {
    return (
        <>
            <Row className="id-title">ID {device?.deviceId}</Row>
            <Row className="title-separator"></Row>
            <Row className="mb-5">
                <Col className="p-0">
                    <p className="label-title">Marca do dispositivo</p>
                    <p className="label-data">{device?.mobileDevice.version}</p>
                </Col>
                <Col className="p-0">
                    <p className="label-title">Modelo do dispositivo</p>
                    <p className="label-data">{device?.mobileDevice.model}</p>
                </Col>
                <Col className="p-0">
                    <p className="label-title">Utilizador</p>
                    <p className="label-data">Chuck Norris</p>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col className="p-0">
                    <p className="label-title">Data de criação</p>
                    <p className="label-data">{moment(device?.creationDate).locale('pt').format('DD MMM YYYY')}</p>
                </Col>
                <Col className="p-0">
                    <p className="label-title">Última actualização</p>
                    <p className="label-data">{moment(device?.creationDate).locale('pt').format('DD MMM YYYY')}</p>
                </Col>
                <Col className="p-0">
                    <p className="label-title">Versão TPA Express</p>
                    <p className="label-data">{device?.application.version}</p>
                </Col>
            </Row>
            <Row>
                <p className="label-title">Alterar terminal associado</p>
                {/*                             <Dropdown />
                 */}{' '}
            </Row>
            <Row className="after-separator mb-4">CÓDIGO DE ADESÃO GERADO</Row>
            <Row>
                <Col className="p-0">
                    <p className="label-title">Tipo de notificação</p>
                    <p className="label-data">Sms</p>
                </Col>
            </Row>
            <Row className="modal-custom-footer w-100 pb-5 mb-5">
                <Col className="mb-5" md={{ span: 2, offset: 7 }}>
                    <ModalConsumer>
                        {({ showModal }) => (
                            <Button
                                className="btn-generic btn-generic btn-confirm-active"
                                onClick={() => {
                                    showModal(ModalCancelDevice, { showModal: true });
                                }}
                            >
                                Anular
                            </Button>
                        )}
                    </ModalConsumer>
                </Col>
                <Col className="p-0">
                    <Button className="btn-generic btn-generic btn-confirm-active">Activar</Button>
                </Col>
            </Row>
        </>
    );
};

const LoginHistory = () => {
    return (
        <>
            <div className="card-info">
                <div className="d-flex">
                    <div className="w-25 mr-5">
                        <p className="card-label-title my-0">Utilizador actual</p>
                        <p className="card-label-data my-0">Shin Chan</p>
                    </div>
                    <div className="w-50">
                        <p className="card-label-title my-0">Data de Login</p>
                        <p className="card-label-data my-0">12 Jan 2021 12:30</p>
                    </div>
                </div>
                <div className="before-separator">
                    <Button className="btn-generic">FORÇAR LOGOUT</Button>
                </div>
                <div className="d-flex">
                    <p className="card-label-info mr-5 my-0">ID135790</p>
                    <p className="card-label-info mr-5 my-0">Nokia</p>
                    <div className="card-label-info">
                        <p className="my-0">6325674536748</p>
                        <p className="my-0">TPA Loja 01 Angola</p>
                    </div>
                </div>
            </div>
            <TableLoginHistory />
        </>
    );
};

export default ModalDetailDevice;
