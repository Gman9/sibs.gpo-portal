import React from 'react';
import { TableHeadType, TableColumnType } from './types';

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

export const TableColumn = ({ className, children }: TableColumnType) => {
    return (
        <th className={className} scope="col">
            {children}
        </th>
    );
};
