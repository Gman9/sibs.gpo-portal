import React from 'react';

import './Checkbox.scss';

export type TypeCheckbox = {
    className?: string | null;
    inputClassName?: string | null;
    labelClassName?: string | null;
    labelText?: string;
    id: string;
    onClick?: any;
};

const Checkbox = ({ className, inputClassName, labelClassName, labelText, id, onClick }: TypeCheckbox) => {
    return (
        <div className={`custom-control custom-checkbox ${className}`}>
            <input type="checkbox" className={`custom-control-input ${inputClassName}`} id={id} onClick={onClick} />
            {labelText !== null && (
                <label className={`custom-control-label ${labelClassName}`} htmlFor={id}>
                    {labelText}
                </label>
            )}
        </div>
    );
};

export default Checkbox;
