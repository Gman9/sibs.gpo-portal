import { ReactElement } from 'react';

export type NavBarType = {
    className?: string;
    children: ReactElement | ReactElement[];
};

export type NavMenuType = {
    children?: ReactElement | ReactElement[];
};

export type NavItemType = {
    className?: string;
    link?: string;
    children?: ReactElement | string | number;
};
