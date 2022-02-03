import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from '../../../components/Buttons/Button';
import IconClose from '../../../assets/imgs/icons/ic-close-blue.svg';
import TableLoginHistory from '../Tables/TableLoginHistory';
import { ModalConsumer } from '../../../contexts/ModalContext/ModalContext';
import ModalCancelDevice from '../Modals/ModalCancelDevice';
import { TypeModalDetailsDevice } from './types';

import './Modal.scss';

const ModalDetailDevice = ({ showModal, onRequestClose, deviceId }: TypeModalDetailsDevice) => {
    const [show, setShow] = useState(true);
    const [page, setPage] = useState(0);

    return (
        <Modal show={show} dialogClassName="dialog" contentClassName="px-5 pt-5 pb-4" size="lg">
            <div className="d-flex flex-row-reverse mb-2">
                <div className="btn">
                    <img width={18} height={18} src={IconClose} alt="close" onClick={onRequestClose} />
                </div>
            </div>
            {page === 0 && <DeviceDetail />}
            {page === 1 && <LoginHistory />}

            <div className="d-flex justify-content-center">
                <div className="d-flex align-items-center">
                    <span className="label-move-modal mr-3">DETALHE</span>
                    <Button className="btn-rounded" onClick={() => setPage(0)}>
                        {'<'}
                    </Button>
                </div>
                <div className="d-flex align-items-center mx-5">
                    <span className={`dot mini mr-1 ${page === 0 ? 'active' : ''}`}></span>
                    <span className={`dot mini ${page === 1 ? 'active' : ''}`}></span>
                </div>
                <div className="align-items-end">
                    <div className="d-flex align-content-end">
                        <Button className="btn-rounded" onClick={() => setPage(1)}>
                            {'>'}
                        </Button>
                        <span className="label-move-modal ml-3">HISTÓRICO DE LOGIN</span>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

const DeviceDetail = () => {
    return (
        <>
            <ModalConsumer>
                {({ showModal }) => (
                    <>
                        <div className="id-title">ID 135790</div>
                        <div className="title-separator"></div>
                        <div className="d-flex">
                            <div className="w-25 mr-5">
                                <p className="label-title">Marca do dispositivo</p>
                                <p className="label-data">Nokia</p>
                            </div>
                            <div className="w-25 mr-5">
                                <p className="label-title">Modelo do dispositivo</p>
                                <p className="label-data">3310</p>
                            </div>
                            <div className="w-25">
                                <p className="label-title">Utilizador</p>
                                <p className="label-data">Chuck Norris</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="w-25 mr-5">
                                <p className="label-title">Data de criação</p>
                                <p className="label-data">10 jan 2021</p>
                            </div>
                            <div className="w-25">
                                <p className="label-title">Última actualização</p>
                                <p className="label-data">Ontem 17:17</p>
                            </div>
                        </div>
                        <div className="my-5">
                            <p className="label-title">Alterar terminal associado</p>
                            {/*                             <Dropdown />
                             */}{' '}
                        </div>
                        <div className="after-separator mb-4">CÓDIGO DE ADESÃO GERADO</div>
                        <div className="d-flex">
                            <div className="w-25 mr-5">
                                <p className="label-title">Nº de códigos gerados</p>
                                <p className="label-data">01</p>
                            </div>
                            <div className="w-25">
                                <p className="label-title">Tipo de notificação</p>
                                <p className="label-data">Sms</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end my-5">
                            <Button
                                className="btn-generic btn-generic btn-confirm-active mr-3"
                                onClick={() => {
                                    showModal(ModalCancelDevice, { showModal: true });
                                }}
                            >
                                Anular
                            </Button>
                            <Button className="btn-generic btn-generic btn-confirm-active">Activar</Button>
                        </div>
                    </>
                )}
            </ModalConsumer>
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
