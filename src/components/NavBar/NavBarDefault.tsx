import React, { useEffect, useState } from 'react';
import ModalNewDevice from '../../pages/DevicesManagement/Modals/ModalNewDevice';
import NavBar from './NavBar';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import ImgPlus from '../../assets/imgs/icons/btn-add-orange.png';
import { ModalConsumer } from '../../contexts/ModalContext/ModalContext';
import { apiPointsOfSale } from '../../services/Api';
import { PointOfSale } from '../../api/generated/gpo';
import { Button } from '../Buttons/Button';

import './NavBar.scss';

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
                                                    Não existem terminais disponíveis para adicionar a um novo
                                                    dispositivo.
                                                </p>
                                                <p className="popover-secondary-msg">
                                                    Desabilite um terminal ou solicite outro terminal virtual ao seu
                                                    banco.
                                                </p>
                                                <div className="d-flex justify-content-center">
                                                    <Button
                                                        className="btn-generic"
                                                        onClick={() => setPosRequested(false)}
                                                    >
                                                        COMPREENDI
                                                    </Button>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="popover-item-navbar">NOVA COMPRA</div>
                                                <div className="popover-item-navbar">GERAR NOVO QR</div>
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
                                                            ASSOCIAR NOVO DISPOSITIVO
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
