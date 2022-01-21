import React from 'react';
import { Dropdown as BootDropDown, Button } from 'react-bootstrap';

import './Dropdown.scss';

const dummyItems = ['example1', 'example2', 'example3'];

const Dropdown = (items: any) => {
    return (
        <BootDropDown>
            <Button className="custom-dropdown">
                <span>Selecionar terminal</span>
            </Button>
            <BootDropDown.Toggle className="custom-dropdown-toggle" split id="dropdown-custom-2" />
            <BootDropDown.Menu className="custom-dropdown-menu">
                {dummyItems.map((item, idx) => (
                    <BootDropDown.Item key={idx} eventKey={idx}>
                        {item}
                    </BootDropDown.Item>
                ))}
            </BootDropDown.Menu>
        </BootDropDown>
    );
};

export default Dropdown;
