import React from 'react';
import { TypeRow } from './types';

export const Row = ({ children, className }: TypeRow) => {
    return <div className={`col ${className ? className : ''}`}>{children}</div>;
};
