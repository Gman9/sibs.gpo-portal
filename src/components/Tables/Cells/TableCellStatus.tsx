import React from 'react';
import { CellStatusType } from '../types';
import i18n from '../../../i18n';

import '../Table.scss';

export default function TableCellStatus({ className, status }: CellStatusType) {
    return (
        <td className={className}>
            <div className={`status ${status}`}>{i18n.t(`devices.${status}`).toUpperCase()}</div>
        </td>
    );
}
