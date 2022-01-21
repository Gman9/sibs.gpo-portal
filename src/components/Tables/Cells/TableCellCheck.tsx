import React from 'react';
import { CellCheckType } from '../types';
import CheckBox from '../../Checkboxes/Checkbox';

import '../Table.scss';

export default function TableCellCheck({ className, id, onClick, onCheckBoxClick }: CellCheckType) {
    return (
        <td className={className} onClick={onClick}>
            <CheckBox id={id} className="square" onClick={onCheckBoxClick} />
        </td>
    );
}
