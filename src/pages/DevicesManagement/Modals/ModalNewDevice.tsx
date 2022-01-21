import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from '../../../components/Buttons/Button';
import Dropdown from '../../../components/Dropdowns/Dropdown';
import CheckBox from '../../../components/Checkboxes/Checkbox';
import IconInfoCopy from '../../../assets/imgs/icons/info-copy.svg';
import IconCopy from '../../../assets/imgs/icons/ic-copy.svg';
import IconClose from '../../../assets/imgs/icons/ic-close-blue.svg';

import './Modal.scss';

export type TypeModalNewDevice = {
    showModal?: boolean;
    onRequestClose?: any;
};

const ModalNewDevice = ({ showModal, onRequestClose }: TypeModalNewDevice) => {
    const [show, setShow] = useState(true);

    return (
        <Modal show={show} dialogClassName="dialog" contentClassName="px-5 pt-5 pb-4" size="lg">
            <div className="d-flex flex-row-reverse mb-2">
                <div className="btn">
                    <img width={18} height={18} src={IconClose} alt="close" onClick={onRequestClose} />
                </div>
            </div>
            <div className="id-title">Associar novo dispositivo</div>
            <div className="title-separator"></div>
            <div className="count-down">10m:00s</div>
            <div className="text-center mb-4 mt-5">
                <span className="dot mr-1"></span>
                <span className="dot mr-1"></span>
                <span className="dot"></span>
            </div>
            {/*<div className="code">23579020</div>*/}
            <div className="access-code mb-2">
                <span>CÓDIGO DE ADESÃO </span>
                <img className="align-baseline" src={IconInfoCopy} alt="copyInfo" />
            </div>
            <div className="d-flex justify-content-center mb-3">
                <img width={19} height={19} src={IconCopy} alt="copy" />
            </div>
            <div className="after-separator mb-4">TERMINAL</div>
            <div className="mb-4">
                <Dropdown />
            </div>
            <div className="after-separator mb-4">NOTIFICAR COMERCIANTE</div>
            <CheckBox className="mb-4" labelText="Notificar por Sms" id="smsNotification" />
            <CheckBox labelText="Notificar por E-mail" id="emailNotification" />
            <div className="d-flex flex-row-reverse mt-5">
                <Button className="btn-confirm-inactive" disabled={true}>
                    GERAR CÓDIGO
                </Button>
            </div>
        </Modal>
    );
};

export default ModalNewDevice;
