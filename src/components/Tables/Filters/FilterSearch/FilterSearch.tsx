import React from 'react';
import ICSearch from '../../../../assets/imgs/icons/general/ic-search-open.svg';
import { Row, Col } from 'react-bootstrap';
import { FilterSearchType } from './types';

import './FilterSearch.scss';

export default function FilterSearch({ className, placeholder, onChange }: FilterSearchType) {
    return (
        <Row className="p-2">
            <Col>
                <img className="mr-1" alt="search" src={ICSearch} />
                <input className={`input-filter ${className}`} placeholder={placeholder} onChange={onChange} />
            </Col>
        </Row>
    );
}
