import React, { useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import { Button } from '../../../components/Buttons/Button';
import CheckBox from '../../../components/Checkboxes/Checkbox';
import IconInfoCopy from '../../../assets/imgs/icons/info-copy.svg';
import IconCopyUnavailable from '../../../assets/imgs/icons/ic-copy-unavailable.svg';
import IconCopy from '../../../assets/imgs/icons/ic-copy.svg';
import IconClose from '../../../assets/imgs/icons/ic-close-blue.svg';
import IconSuccess from '../../../assets/imgs/icons/ic-sucesso.svg';
import IconError from '../../../assets/imgs/icons/ic-sucesso.svg';
import { apiRegistration } from '../../../services/Api';
import { PointOfSale } from '../../../api/generated/gpo';
import IconFavTpa from '../../../assets/imgs/icons/tpa-favorito.svg';
import { TypeModalNewDevice } from './types';
import { Tooltip } from '../../../components/Tooltip/Tooltip';
import Dropdown from '../../../components/Dropdowns/Dropdown';
import Timer from '../../../components/Timer/Timer';
import { Toast } from '../../../components/Toasts/Toast';
import i18n from '../../../i18n';

import './Modal.scss';

const ModalNewDevice = ({ showModal, pointsOfSale, onRequestClose }: TypeModalNewDevice) => {
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
                <Row className="id-title">{i18n.t('devices.associate_new_device')}</Row>
                <Row className="title-separator"></Row>
                {!timer ? (
                    <Row className="count-down justify-content-center">10m:00s</Row>
                ) : (
                    <Timer
                        className="count-down"
                        autoStart={true}
                        expiryTimestamp={timer}
                        onExpire={() => setCode(null)}
                        timeOutMsg={<ExpiredTime dropdownValue={dropdownValue} handleSubmit={() => handleSubmit()} />}
                    />
                )}
                {code ? (
                    <Row className="code justify-content-center">{code}</Row>
                ) : (
                    timer === null && (
                        <Row className="justify-content-center mb-4 mt-5">
                            <span className="dot mr-1"></span>
                            <span className="dot mr-1"></span>
                            <span className="dot"></span>
                        </Row>
                    )
                )}
                <Row className="access-code justify-content-center mb-2">
                    <span>{i18n.t('devices.membership_code').toUpperCase()}</span>
                    <Tooltip content={i18n.t('devices.enter_the_code_on_the_associated_device')}>
                        <img className="align-baseline ml-2" src={IconInfoCopy} alt="copyInfo" />
                    </Tooltip>
                </Row>
                <Row className="justify-content-center mb-3">
                    {code ? (
                        <img
                            className="cursor-pointer"
                            width={19}
                            height={19}
                            src={IconCopy}
                            alt="copy"
                            onClick={() => code && navigator.clipboard.writeText(code)}
                        />
                    ) : (
                        <img width={19} height={19} src={IconCopyUnavailable} alt="copy" />
                    )}
                </Row>
                <Row className="after-separator mb-4">{i18n.t('devices.terminal').toUpperCase()}</Row>
                <Row>
                    <Dropdown
                        className="mb-4"
                        value={
                            dropdownValue !== null ? (
                                <DropdownItem id={dropdownValue?.id} name={dropdownValue?.name} />
                            ) : (
                                <span>{i18n.t('devices.select_terminal')}</span>
                            )
                        }
                    >
                        {pointsOfSale?.map((item: PointOfSale, idx: string | number) => (
                            <Dropdown.Option key={idx} onClick={() => setDropdownValue(item)}>
                                <DropdownItem id={item?.id} name={item?.name} />
                            </Dropdown.Option>
                        ))}
                    </Dropdown>
                </Row>
                <Row className="after-separator mb-4">{i18n.t('devices.notify_merchant').toUpperCase()}</Row>
                <Row>
                    <CheckBox
                        className="mb-4"
                        labelText={i18n.t('devices.notify_by_sms')}
                        id="smsNotification"
                        checked={sms}
                        onChange={() => setSms(!sms)}
                    />
                </Row>
                <Row>
                    <CheckBox
                        labelText={i18n.t('devices.notify_by_email')}
                        id="emailNotification"
                        checked={email}
                        onChange={() => setEmail(!email)}
                    />
                </Row>
                <Row className="modal-custom-footer w-100 mb-5 mr-5">
                    <Col className="p-0" md={{ span: 2, offset: 9 }}>
                        {!timer ? (
                            <Button
                                className={`btn-generic ${dropdownValue === null ? 'btn-confirm-inactive' : ''}`}
                                disabled={dropdownValue === null}
                                onClick={() => handleSubmit()}
                            >
                                {i18n.t('devices.generate_code').toUpperCase()}
                            </Button>
                        ) : (
                            <Button
                                className={`btn-generic  right-0 ${code !== null ? 'btn-confirm-inactive' : ''}`}
                                disabled={code !== null}
                                onClick={() => console.log('TODO Anular')}
                            >
                                {i18n.t('devices.cancel').toUpperCase()}
                            </Button>
                        )}
                    </Col>
                </Row>
            </Container>
        </Modal>
    );
};

const DropdownItem = ({ id, name }: PointOfSale) => (
    <>
        <p className="label-id d-inline-block m-0">{id}</p>
        <img className="float-right mt-2" src={IconFavTpa} alt="favorite"></img>
        <p className="label-tpa m-0">{name}</p>
    </>
);

const ExpiredTime = ({ dropdownValue, handleSubmit }: any) => (
    <>
        <Row className="expired-code justify-content-center mb-3">
            {i18n.t('devices.your_membership_code_expired').toUpperCase()}
        </Row>
        <Row className="justify-content-center mb-3">
            <Button
                className={`btn-generic ${dropdownValue === null ? 'btn-confirm-inactive' : ''}`}
                disabled={dropdownValue === null}
                onClick={() => handleSubmit()}
            >
                {i18n.t('devices.generate_new_code').toUpperCase()}{' '}
            </Button>
        </Row>
    </>
);

export default ModalNewDevice;
