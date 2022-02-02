import { ReactElement } from 'react';

export type TypeDropdown = {
    children: any;
    className?: string;
    value: string | ReactElement<any, any>;
};

export type TypeDropdownOption = {
    children: any;
    onClick: React.MouseEventHandler<HTMLElement> | undefined;
    key: string | number;
};
