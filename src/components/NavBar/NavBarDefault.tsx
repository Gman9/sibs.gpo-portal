import React, { useEffect, useState } from 'react';
import ModalNewDevice from '../../pages/DevicesManagement/Modals/ModalNewDevice';
import NavBar from './NavBar';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import ImgPlus from '../../assets/imgs/icons/btn-add-orange.png';
import { ModalConsumer } from '../../contexts/ModalContext/ModalContext';
import { apiPointsOfSale } from '../../services/Api';
import { PointOfSale } from '../../api/generated/gpo';
import { Button } from '../Buttons/Button';
import i18n from '../../i18n';

import './NavBar.scss';

const requestMenu = [
    { id: 1, title: i18n.t('navbar.requests_in_progres').toUpperCase() },
    { id: 2, title: i18n.t('navbar.requests_done').toUpperCase() },
    { id: 3, title: i18n.t('navbar.transactions').toUpperCase() },
];

const manageMenu = [
    { id: 4, title: i18n.t('navbar.management').toUpperCase() },
    { id: 5, title: i18n.t('navbar.qr_code').toUpperCase() },
    { id: 6, title: i18n.t('navbar.devices').toUpperCase() },
];

const NavBarDefault = () => {
    const [posRequested, setPosRequested] = useState<boolean>(false);
    const [pointsOfSale, setPointsOfSale] = useState<PointOfSale[] | null>(null);

    useEffect(() => {
        apiPointsOfSale
            .getAllMerchantPos('21')
            .then((resp) => {
                setPointsOfSale(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
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
                                        {(!pointsOfSale || pointsOfSale.length === 0) && posRequested ? (
                                            <div className="popover-msg-body">
                                                <p className="popover-primary-msg">
                                                    {i18n.t('navbar.there_are_no_terminals_available')}
                                                </p>
                                                <p className="popover-secondary-msg">
                                                    {i18n.t('navbar.disable_or_request_another_terminal')}
                                                </p>
                                                <div className="d-flex justify-content-center">
                                                    <Button
                                                        className="btn-generic"
                                                        onClick={() => setPosRequested(false)}
                                                    >
                                                        {i18n.t('navbar.understood').toUpperCase()}
                                                    </Button>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="popover-item-navbar">
                                                    {i18n.t('navbar.new_buy').toUpperCase()}
                                                </div>
                                                <div className="popover-item-navbar">
                                                    {i18n.t('navbar.generate_new_qr_code').toUpperCase()}
                                                </div>
                                                <ModalConsumer>
                                                    {({ showModal }) => (
                                                        <div
                                                            className="popover-item-navbar"
                                                            onClick={() => {
                                                                setPosRequested(true);
                                                                if (pointsOfSale !== null) {
                                                                    showModal(ModalNewDevice, {
                                                                        showModal: true,
                                                                        pointsOfSale: pointsOfSale,
                                                                    });
                                                                }
                                                            }}
                                                        >
                                                            {i18n.t('navbar.associate_new_device').toUpperCase()}
                                                        </div>
                                                    )}
                                                </ModalConsumer>
                                            </>
                                        )}
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
    );
};

export default NavBarDefault;
