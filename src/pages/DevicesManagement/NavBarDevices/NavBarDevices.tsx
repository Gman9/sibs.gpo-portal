import React from 'react';
import ModalNewDevice from '../Modals/ModalNewDevice';
import NavBar from '../../../components/NavBar/NavBar';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import ImgPlus from '../../../assets/imgs/icons/btn-add-orange.png';
import { ModalConsumer } from '../../../contexts/ModalContext/ModalContext';

import './NavBarDevices.scss';

const requestMenu = [
    { id: 1, title: 'PEDIDOS PROGRESSOS' },
    { id: 2, title: 'PEDIDOS FECHADOS' },
    { id: 3, title: 'MOVIMENTOS' },
];

const manageMenu = [
    { id: 4, title: 'GESTÃO' },
    { id: 5, title: 'QRCODE' },
    { id: 6, title: 'DISPOSITIVOS' },
];

const NavBarDevices = () => {
    return (
        <ModalConsumer>
            {({ showModal }) => (
                <NavBar>
                    <NavBar.Menu>
                        <>
                            {requestMenu.map((menu) => (
                                <NavBar.Item key={menu.id} link="/#">
                                    {menu.title}
                                </NavBar.Item>
                            ))}
                            <NavBar.Item className="cursor-pointer">
                                <OverlayTrigger
                                    trigger="click"
                                    rootClose
                                    placement="bottom"
                                    overlay={
                                        <Popover className="popover-navbar" id="popover-navbar">
                                            <Popover.Body className="popover-body-navbar">
                                                <div className="popover-item-navbar">NOVA COMPRA</div>
                                                <div className="popover-item-navbar">GERAR NOVO QR</div>
                                                <div
                                                    className="popover-item-navbar"
                                                    onClick={() => {
                                                        showModal(ModalNewDevice, { showModal: true });
                                                    }}
                                                >
                                                    ASSOCIAR NOVO DISPOSITIVO
                                                </div>
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <img width={28} height={28} alt="new request" src={ImgPlus} />
                                </OverlayTrigger>
                            </NavBar.Item>
                            {manageMenu.map((menu) => (
                                <NavBar.Item key={menu.id} link="/#">
                                    {menu.title}
                                </NavBar.Item>
                            ))}
                        </>
                    </NavBar.Menu>
                </NavBar>
            )}
        </ModalConsumer>
    );
};

export default NavBarDevices;
