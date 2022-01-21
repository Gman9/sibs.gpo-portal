import React from 'react';
import { TypeContainer } from './types';

export const Container = ({ children, className }: TypeContainer) => {
    return <div className={`container-fluid ${className ? className : ''}`}>{children}</div>;
};
