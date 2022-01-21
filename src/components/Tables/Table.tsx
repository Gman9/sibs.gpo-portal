import React from 'react';
import { TableColumn, TableHead } from './Table.Head';
import { TableBody, TableCell, TableRow } from './Table.Body';
import { TableType } from './types';
import TableCellStatus from './Cells/TableCellStatus';
import TableCellCheck from './Cells/TableCellCheck';

import './Table.scss';

export default function Table({ className, children }: TableType) {
    return <table className={`table ${className}`}>{children}</table>;
}

Table.Header = TableHead;
Table.Column = TableColumn;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell || TableCellStatus || TableCellCheck;
