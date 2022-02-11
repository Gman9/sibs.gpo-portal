import React from 'react';
import { TableHeadType, TableColumnType } from './types';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import ICFilter from '../../assets/imgs/icons/ic-filter.svg';

export const TableHead = ({ children }: TableHeadType) => {
    return (
        <thead className="generic-header">
            <tr>
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child); //Add props here
                })}
            </tr>
        </thead>
    );
};

export const TableColumn = ({ className, children, filter }: TableColumnType) => {
    return (
        <th className={className} scope="col">
            {children}
            {filter && (
                <OverlayTrigger
                    trigger={['focus', 'click']}
                    rootClose
                    placement="bottom"
                    overlay={
                        <Popover className="popover-table-actions" id="popover-table-actions">
                            <Popover.Body className="popover-body-table-actions">{filter}</Popover.Body>
                        </Popover>
                    }
                >
                    <img className="ml-1" alt="filter" src={ICFilter} />
                </OverlayTrigger>
            )}
        </th>
    );
};
