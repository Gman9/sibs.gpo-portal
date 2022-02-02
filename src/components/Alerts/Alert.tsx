import React from 'react';
import { TypeAlert } from './types';

import './Alert.scss';

export const Alert = ({ children, className }: TypeAlert) => {
    return <div className={`custom-alert ${className}`}>{children}</div>;
};
