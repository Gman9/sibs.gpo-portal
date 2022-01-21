import React from 'react';
import { NavItemType, NavMenuType } from './types';

import './NavBar.scss';

export const NavMenu = ({ children }: NavMenuType) => {
    return <ul className="navbar-nav d-flex justify-content-between align-items-center">{children}</ul>;
};

export const NavItem = ({ children, className, link }: NavItemType) => {
    return (
        <li className={`nav-item ${className}`}>
            <a className="nav-link nav-link-custom" href={link}>
                {children}
            </a>
        </li>
    );
};
