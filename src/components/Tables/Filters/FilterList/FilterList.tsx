import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FilterListType } from './types';

import './FilterList.scss';

export default function TableCellFilterList({ className, onClick }: FilterListType) {
    return (
        <Row className="p-2">
            <Col>
                <ul className={`list-filter ${className}`}>
                    {/* Items have to be dynamic*/}
                    <li className="item p-2">ACTIVO</li>
                    <li className="item p-2">INACTIVO</li>
                    <li className="item p-2">ANULADO</li>
                </ul>
            </Col>
        </Row>
    );
}
