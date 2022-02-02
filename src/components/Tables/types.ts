import { MouseEventHandler, ReactElement } from 'react';

/* Table */
export type TableType = {
    className?: string;
    children: ReactElement[] | ReactElement;
};

/* Table Header */
export type TableHeadType = {
    className?: string;
    children: ReactElement[];
};

export type TableColumnType = {
    className?: string;
    children?: ReactElement | ReactElement[] | string;
};

/* Table Body */
export type TableBodyType = {
    className?: string;
    children: ReactElement[];
};

export type TableRowType = {
    className?: string;
    onClick?: (value: any) => any;
    children?: ReactElement[] | string;
};

/* Table Cells */
export type TableCellType = {
    className?: string;
    children?: ReactElement | string | number;
};

export type CellStatusType = {
    className?: string;
    status: string;
};

export type CellCheckType = {
    className?: string;
    id: string;
    onClick?: any;
    onCheckBoxClick?: any;
    checked: boolean;
};
