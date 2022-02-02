import React from 'react';
import { Tooltip as BsTooltip, OverlayTrigger } from 'react-bootstrap';
import { TypeTooltip } from './types';

import './Tooltip.scss';

export const Tooltip = ({ children, className, content }: TypeTooltip) => {
    return (
        <OverlayTrigger
            placement="bottom"
            overlay={
                <BsTooltip className={`tooltip-cutom ${className}`} id="tooltip">
                    {content}
                </BsTooltip>
            }
        >
            {children}
        </OverlayTrigger>
    );
};
