import React from 'react';
import { TypeCard } from './types';
import IconFavTpa from '../../assets/imgs/icons/tpa-favorito.svg';
import IconCardCheck from '../../assets/imgs/icons/general/card-check.svg';

import './Cards.scss';

export const Card = ({
    className,
    primaryTextClassName,
    primaryText,
    secondaryText,
    secondaryTextClassName,
}: TypeCard) => {
    return (
        <div className="position-relative">
            <img className="card-badge" width={14} height={14} src={IconCardCheck} alt="success" />
            <div className={`card-custom ${className}`}>
                <p className={`card-text-primary d-inline-block m-0 ${primaryTextClassName}`}>{primaryText}</p>
                <img className="float-right mt-2" width={14} height={13} src={IconFavTpa} alt="favorite"></img>
                <p className={`card-text-secondary m-0 ${secondaryTextClassName}`}>{secondaryText}</p>
            </div>
        </div>
    );
};
