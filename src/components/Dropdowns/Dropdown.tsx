import React from 'react';
import { Dropdown as BootDropDown, Button } from 'react-bootstrap';
import { TypeDropdown, TypeDropdownOption } from './types';

import './Dropdown.scss';

const Dropdown = ({ children, className, value }: TypeDropdown) => {
    return (
        <BootDropDown className={className}>
            <Button className="custom-dropdown">{value}</Button>
            <BootDropDown.Toggle className="custom-dropdown-toggle" split id="dropdown-id" />
            <BootDropDown.Menu className="custom-dropdown-menu">{children}</BootDropDown.Menu>
        </BootDropDown>
    );
};

const DropdownOption = ({ children, key, onClick }: TypeDropdownOption) => {
    return (
        <BootDropDown.Item key={key} eventKey={key} onClick={onClick}>
            {children}
        </BootDropDown.Item>
    );
};

Dropdown.Option = DropdownOption;

export default Dropdown;
