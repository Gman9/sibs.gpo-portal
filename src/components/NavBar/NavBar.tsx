import React from 'react';
import EMIS from '../../assets/imgs/EMIS.svg';
import ICLogout from '../../assets/imgs/icons/ic-logout.svg';
import { NavItem, NavMenu } from './NavBar.Menu';
import { NavBarType } from './types';

import './NavBar.scss';

const user = {
    id: 1,
    name: 'Loja Maluca',
    logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.besttechie.com%2Fcontent%2Fimages%2F2021%2F01%2Fgme-amc-stock-to-the-moon.jpeg&f=1&nofb=1',
    currentMerchant: 3000,
};

const NavBar = ({ className, children }: NavBarType) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom d-flex justify-content-between">
            <Logo />
            {children}
            <UserInfo />
        </nav>
    );
};

function Logo() {
    return <img className="navbar-brand" alt="EMIS" src={EMIS} />;
}

function UserInfo() {
    return (
        <div className="d-flex flex-row align-items-center justify-content-end">
            <div className="px-2">
                <div className="d-flex flex-column align-items-end">
                    <div className="merchant-name">{user.name}</div>
                    <div className="merchant-mail">Comerciante {user.currentMerchant}</div>
                    <div className="current-date">10 JAN 2018</div>
                </div>
            </div>
            <div className="px-2">
                <img alt="user-logo" className="rounded-circle user-logo" src={user.logo} />
            </div>
            <div className="px-2">
                <img alt="logout" src={ICLogout} />
            </div>
        </div>
    );
}

NavBar.Menu = NavMenu;
NavBar.Item = NavItem;

export default NavBar;
