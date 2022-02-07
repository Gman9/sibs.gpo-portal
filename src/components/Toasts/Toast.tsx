import React, { useState } from 'react';
import { TypeToast } from './types';
import { Toast as BtToast } from 'react-bootstrap';

import './Toast.scss';

export const Toast = ({ children, className, delay }: TypeToast) => {
    const [show, setShow] = useState(true);

    return (
        <BtToast className={`toast ${className}`} onClose={() => setShow(false)} show={show} delay={delay} autohide>
            <BtToast.Body>{children}</BtToast.Body>
        </BtToast>
    );
};
