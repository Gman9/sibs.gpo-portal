import React from 'react';
import { TypeColumn } from './types';

export const Column = ({ children, className }: TypeColumn) => {
    return <div className={`col ${className ? className : ''}`}>{children}</div>;
};
