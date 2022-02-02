import React from 'react';
import { CellCheckType } from '../types';
import CheckBox from '../../Checkboxes/Checkbox';

import '../Table.scss';

export default function TableCellCheck({ className, id, onClick, onCheckBoxClick, checked }: CellCheckType) {
    return (
        <td className={className} onClick={onClick}>
            <CheckBox id={id} className="square" onChange={onCheckBoxClick} checked={checked} />
        </td>
    );
}
