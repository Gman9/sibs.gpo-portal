import React from 'react';
import { TableBodyType, TableRowType, TableCellType } from './types';

export const TableBody = ({ className, children }: TableBodyType) => {
    return <tbody className={`generic-body ${className}`}>{children}</tbody>;
};

export const TableRow = ({ className, onClick, children }: TableRowType) => {
    return (
        <tr className={className} onClick={onClick}>
            {children}
        </tr>
    );
};

export const TableCell = ({ className, children }: TableCellType) => {
    return <td className={className}>{children}</td>;
};
