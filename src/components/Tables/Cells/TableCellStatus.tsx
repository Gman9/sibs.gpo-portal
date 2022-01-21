import React from 'react';
import { CellStatusType } from '../types';

import '../Table.scss';

export default function TableCellStatus({ className, status }: CellStatusType) {
    return (
        <td className={className}>
            <div className={`status ${status}`}>{status}</div>
        </td>
    );
}
