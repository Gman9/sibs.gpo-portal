import React from 'react';
import { TypeCheckbox } from './types';

import './Checkbox.scss';

const Checkbox = ({ className, inputClassName, labelClassName, labelText, id, onChange, checked }: TypeCheckbox) => {
    return (
        <div className={`custom-control custom-checkbox ${className}`}>
            <input
                type="checkbox"
                className={`custom-control-input ${inputClassName}`}
                checked={checked}
                id={id}
                onChange={onChange}
            />
            {labelText !== null && (
                <label className={`custom-control-label ${labelClassName}`} htmlFor={id}>
                    {labelText}
                </label>
            )}
        </div>
    );
};

export default Checkbox;
