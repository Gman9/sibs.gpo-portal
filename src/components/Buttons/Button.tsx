import React from 'react';
import { TypeButton } from './types';
import './Buttons.scss';

export const Button = ({ children, className, textClassName, disabled, onClick }: TypeButton) => {
    return (
        <button type="button" className={className} onClick={onClick} disabled={disabled}>
            <span className={textClassName ? textClassName : ''}>{children}</span>
        </button>
    );
};
