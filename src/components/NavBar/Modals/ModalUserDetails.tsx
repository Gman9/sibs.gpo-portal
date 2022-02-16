import React, { useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import { Button } from '../../../components/Buttons/Button';
import IconClose from '../../../assets/imgs/icons/ic-close-blue.svg';
import IconSuccess from '../../../assets/imgs/icons/ic-sucesso.svg';
import IconError from '../../../assets/imgs/icons/ic-sucesso.svg';
import IconMerchant from '../../../assets/imgs/merchant-picture.svg';
import IconCopy from '../../../assets/imgs/icons/ic-copy.svg';
import IconReload from '../../../assets/imgs/icons/reload-20.svg';
import { apiRegistration } from '../../../services/Api';
import { PointOfSale } from '../../../api/generated/gpo';
import { ModalUserDetailsType } from './types';
import { Toast } from '../../../components/Toasts/Toast';
import i18n from '../../../i18n';

import './ModalUserDetails.scss';

const ModalUserDetails = ({ showModal, onRequestClose }: ModalUserDetailsType) => {
    const [error, setError] = useState<boolean>(false);
    const [dropdownValue, setDropdownValue] = useState<PointOfSale | null>(null);
    const [sms, setSms] = useState<boolean>(false);
    const [email, setEmail] = useState<boolean>(false);
    const [code, setCode] = useState<string | null>(null);
    const [timer, setTimer] = useState<Date | null>(null);

    const handleSubmit = () => {
        const bodyParams = {
            merchantId: '21', //UserContext
            terminalId: '98', //dropdownValue.id
            registration: {
                user: '1000', //UserContext
            },
            notify: {
                mobile: {
                    value: '911111111', //UserContext
                    active: sms,
                },
                email: {
                    value: 'sibs@sibs.com', //UserContext
                    active: email,
                },
            },
        };

        apiRegistration
            .createRegistration(bodyParams)
            .then((resp) => {
                const time = new Date();
                time.setMilliseconds(time.getMilliseconds() + 600000);
                setTimer(null);
                setTimer(time);
                setCode(resp.data.registration.code);
            })
            .catch((err) => {
                setError(true);
                console.log(err);
            });
    };

    return (
        <Modal show={showModal} className="m-0" dialogClassName="dialog" contentClassName="d-flex px-5" size="lg">
            <Container>
                <Row className="justify-content-center">
                    {code && (
                        <Toast className="success" delay={5000}>
                            <div className="d-flex justify-content-between">
                                <span className="mr-2">{i18n.t('toast.membership_code_generated_with_success')}</span>
                                <img className="align-bottom" src={IconSuccess} alt="success" />
                            </div>
                        </Toast>
                    )}
                    {code === null && error && (
                        <Toast className="error" delay={5000}>
                            <div className="d-flex justify-content-between">
                                <span className="mr-2">{i18n.t('toast.membership_code_generated_with_error')}</span>
                                <img className="align-bottom" src={IconError} alt="error" />
                            </div>
                        </Toast>
                    )}
                </Row>
                <Row className="flex-row-reverse mb-2 mt-5">
                    <Button className="btn-transparent">
                        <img width={18} height={18} src={IconClose} alt="close" onClick={onRequestClose} />
                    </Button>
                </Row>
                <Row>
                    <p className="label-data">Loja Maluca</p>
                </Row>
                <Row className="id-title">dl-gpo@sibs.com</Row>
                <Row className="title-separator"></Row>
                <Row>
                    <Col className="p-0">
                        <p className="label-title">{i18n.t('navbar.creation_date')}</p>
                        <p className="label-data">28 Setembro 2020</p>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <img
                            className="merchant-img rounded-circle user-logo"
                            width={100}
                            height={100}
                            src={IconMerchant}
                            alt="user-logo"
                        ></img>
                    </Col>
                </Row>
                <Row className="after-separator mb-4">{i18n.t('navbar.merchants')}</Row>
                <Row>
                    <MerchantCard />
                </Row>
            </Container>
        </Modal>
    );
};

function MerchantCard() {
    return (
        <div className="card-merchant p-3">
            <Row className="m-0">
                <Col className="p-0">
                    <p className="merchant-title">{i18n.t('navbar.merchant')} 20</p>
                </Col>
                <Col className="p-0">
                    <p className="merchant-selected text-right">{i18n.t('navbar.setted_up').toUpperCase()}</p>
                </Col>
            </Row>
            <Row className="m-0">
                <p className="merchant-label mb-0">{i18n.t('navbar.frame_token')}</p>
            </Row>
            <Row className="m-0">
                <p className="merchant-token mb-0">token-xpto-123-456-abc-987-18</p>
                <img
                    className="cursor-pointer ml-2"
                    width={15}
                    height={15}
                    src={IconReload}
                    alt="copy"
                    onClick={() => console.log('RELOAD TODO')}
                />
                <img
                    className="cursor-pointer ml-1"
                    width={15}
                    height={15}
                    src={IconCopy}
                    alt="copy"
                    onClick={() => navigator.clipboard.writeText('token-xpto-123-456-abc-987-18')}
                />
            </Row>
            <Row className="m-0">
                <p className="merchant-info mb-0">{i18n.t('navbar.frame_token_is_used_in_iframe_configuration')}</p>
            </Row>
            <Row className="justify-content-end mx-0 mb-4">
                <Button className="btn-generic btn-generic btn-confirm-active">POSICIONAR</Button>
            </Row>
        </div>
    );
}

export default ModalUserDetails;
