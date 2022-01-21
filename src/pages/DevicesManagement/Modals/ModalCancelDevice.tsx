import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from '../../../components/Buttons/Button';

import './Modal.scss';

export type TypeModalCancelDevice = {
    showModal?: boolean;
    onRequestClose?: any;
};

const ModalCancelDevice = ({ showModal, onRequestClose }: TypeModalCancelDevice) => {
    const [show, setShow] = useState(true);

    return (
        <Modal show={show} dialogClassName="dialog" contentClassName="px-5 pt-5 pb-4" size="lg">
            <div>
                <div>Tem a certeza que pretende anular?</div>
                <Button className="btn-confirm-active" onClick={() => onRequestClose()}>
                    Cancel
                </Button>
            </div>
        </Modal>
    );
};

export default ModalCancelDevice;
