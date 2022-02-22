import React, { useEffect, useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import { Button } from '../../../components/Buttons/Button';
import IconClose from '../../../assets/imgs/icons/ic-close-blue.svg';
import IconNextActive from '../../../assets/imgs/icons/pagination/ic-arrow-right.svg';
import IconNextInactive from '../../../assets/imgs/icons/pagination/btn-arrowright-inactive.svg';
import IconPrevActive from '../../../assets/imgs/icons/pagination/ic-arrow-left.svg';
import IconPrevInactive from '../../../assets/imgs/icons/pagination/btn-arrowleft-inactive.svg';
import TableLoginHistory from '../Tables/TableLoginHistory';
import IconFavTpa from '../../../assets/imgs/icons/tpa-favorito.svg';
import { Card } from '../../../components/Cards/Card';
import { TypeDeviceDetail, TypeModalDetailsDevice, TypeLoginHistory } from './types';
import { apiDevices, apiPointsOfSale, apiAuthentication } from '../../../services/Api';
import { Authentication, Device, DeviceStatus } from '../../../api/generated/gpm';
import 'moment/locale/pt';
import moment from 'moment';
import i18n from '../../../i18n';
import Dropdown from '../../../components/Dropdowns/Dropdown';
import { PointOfSale } from '../../../api/generated/gpo/specModels';
import InfiniteScroll from 'react-infinite-scroll-component';

import './Modal.scss';

const ModalDetailDevice = ({ showModal, onRequestClose, deviceId }: TypeModalDetailsDevice) => {
    const [show, setShow] = useState(true);
    const [page, setPage] = useState(0);
    const [device, setdDvice] = useState<Device | null>(null);
    const [dropdownValue, setDropdownValue] = useState<PointOfSale | null>(null);
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

        apiDevices
            .getDevice(deviceId)
            .then((resp) => {
                setdDvice(resp.data);
                console.log(resp);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Modal show={show} dialogClassName="dialog" contentClassName="d-flex px-5" size="lg">
            <Container>
                <Row className="flex-row-reverse mb-2 mt-5">
                    <Button className="btn-transparent">
                        <img width={18} height={18} src={IconClose} alt="close" onClick={onRequestClose} />
                    </Button>
                </Row>
                {page === 0 && (
                    <DeviceDetail
                        device={device}
                        dropdownValue={dropdownValue}
                        setDropdownValue={setDropdownValue}
                        pointsOfSale={pointsOfSale}
                        setPointsOfSale={setPointsOfSale}
                    />
                )}
                {page === 1 && <LoginHistory device={device} />}

                <Row className="modal-custom-footer w-100 mb-5 justify-content-center">
                    <Col md={2}>
                        <span className="label-move-modal mr-3">{i18n.t('devices.detail').toUpperCase()}</span>

                        {page === 1 ? (
                            <Button className="btn-rounded" onClick={() => setPage(0)}>
                                <img width={30} height={30} src={IconPrevActive} alt="next" />
                            </Button>
                        ) : (
                            <Button className="btn-rounded">
                                <img width={30} height={30} src={IconPrevInactive} alt="next" />
                            </Button>
                        )}
                    </Col>
                    <Col md={1} className="d-flex align-items-center justify-content-center">
                        <span className={`dot mini mr-1 ${page === 0 ? 'active' : ''}`}></span>
                        <span className={`dot mini ${page === 1 ? 'active' : ''}`}></span>
                    </Col>
                    <Col md={4}>
                        {page === 0 ? (
                            <Button className="btn-rounded" onClick={() => setPage(1)}>
                                <img width={30} height={30} src={IconNextActive} alt="next" />
                            </Button>
                        ) : (
                            <Button className="btn-rounded">
                                <img width={30} height={30} src={IconNextInactive} alt="next" />
                            </Button>
                        )}
                        <span className="label-move-modal ml-3">{i18n.t('devices.login_history').toUpperCase()}</span>
                    </Col>
                </Row>
            </Container>
        </Modal>
    );
};

const DeviceDetail = ({ device, dropdownValue, setDropdownValue, pointsOfSale }: TypeDeviceDetail) => {
    const handleUpdateStatus = (deviceId: string) => {
        apiDevices
            .updateDevice(deviceId, { status: DeviceStatus.DISABLED })
            .then((resp) => {
                console.log(resp);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Row className="id-title">
                <span>
                    {i18n.t('devices.id').toUpperCase()} {device?.deviceId}
                </span>
            </Row>
            <Row className="title-separator"></Row>
            <Row className="mb-5">
                <Col className="p-0">
                    <p className="label-title">{i18n.t('devices.brand_device')}</p>
                    <p className="label-data">{device?.mobileDevice.version}</p>
                </Col>
                <Col className="p-0">
                    <p className="label-title">{i18n.t('devices.model_device')}</p>
                    <p className="label-data">{device?.mobileDevice.model}</p>
                </Col>
                <Col className="p-0">
                    <p className="label-title">{i18n.t('devices.user')}</p>
                    <p className="label-data">{device?.loggedBy}</p>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col className="p-0">
                    <p className="label-title">{i18n.t('devices.creation_date')}</p>
                    <p className="label-data">{moment(device?.creationDate).locale('pt').format('DD MMM YYYY')}</p>
                </Col>
                <Col className="p-0">
                    <p className="label-title">{i18n.t('devices.last_update')}</p>
                    <p className="label-data">{moment(device?.creationDate).locale('pt').format('DD MMM YYYY')}</p>
                </Col>
                <Col className="p-0">
                    <p className="label-title">{i18n.t('devices.tpa_express_version')}</p>
                    <p className="label-data">{device?.application.version}</p>
                </Col>
            </Row>
            <Row>
                <p className="label-title">
                    {device?.status !== DeviceStatus.ACTIVE ? (
                        <span>{i18n.t('devices.associated_terminal')}</span>
                    ) : (
                        <span>{i18n.t('devices.change_associated_terminal')}</span>
                    )}
                </p>
            </Row>
            <Row className="mb-5">
                {device?.status === DeviceStatus.ACTIVE ? (
                    <Card primaryText={device?.terminalId} secondaryText={device?.terminalName} />
                ) : (
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
                )}
            </Row>
            <Row className="after-separator mb-4">{i18n.t('devices.membership_code_generated').toUpperCase()}</Row>
            <Row>
                <Col className="p-0">
                    <p className="label-title">{i18n.t('devices.notification_type')}</p>
                    <p className="label-data">Sms</p>
                </Col>
            </Row>
            <Row className="modal-custom-footer w-100 pb-5 mb-5">
                <Col className="mb-5" md={{ span: 2, offset: 7 }}>
                    <Button
                        className="btn-generic btn-generic btn-confirm-active"
                        onClick={() => {
                            console.log('Anular');
                        }}
                    >
                        {i18n.t('devices.cancel').toUpperCase()}
                    </Button>
                </Col>
                {device?.status === DeviceStatus.ACTIVE ? (
                    <Col className="p-0">
                        <Button
                            className="btn-generic btn-generic btn-confirm-active"
                            onClick={() => handleUpdateStatus(device.deviceId)}
                        >
                            {i18n.t('devices.disable').toUpperCase()}
                        </Button>
                    </Col>
                ) : (
                    <Col className="p-0">
                        <Button
                            className={`btn-generic btn-generic btn-confirm-active  ${
                                dropdownValue === null ? 'btn-confirm-inactive' : ''
                            }`}
                            disabled={dropdownValue === null ? true : false}
                        >
                            {i18n.t('devices.activate').toUpperCase()}
                        </Button>
                    </Col>
                )}
            </Row>
        </>
    );
};

const LoginHistory = ({ device }: TypeLoginHistory) => {
    const [loginHistory, setLoginHistory] = useState<Authentication[] | null>(null);

    useEffect(() => {
        if (device !== null) {
            apiAuthentication
                .getDeviceAuthentications(device.deviceId)
                .then((resp) => {
                    setLoginHistory(resp.data);
                    console.log(resp);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [device]);

    const handleForceLogout = (deviceId: string | undefined) => {
        if (deviceId) {
            apiAuthentication.forceLogout(deviceId);
        }
    };

    return (
        <>
            <div className="card-info">
                <Row>
                    <Col>
                        <p className="card-label-title my-0">{i18n.t('devices.current_user')}</p>
                        <p className="card-label-data my-0">{device?.loggedBy}</p>
                    </Col>
                    <Col>
                        <p className="card-label-title my-0">{i18n.t('devices.login_date')}</p>
                        <p className="card-label-data my-0">12 Jan 2021 12:30</p>
                    </Col>
                </Row>
                <Row className="before-separator pr-1">
                    <Button className="btn-generic" onClick={() => handleForceLogout(device?.deviceId)}>
                        {i18n.t('devices.force_logout').toUpperCase()}
                    </Button>
                </Row>
                <Row>
                    <Col>
                        <p className="card-label-info my-0">
                            {i18n.t('devices.id').toUpperCase()} {device?.deviceId}
                        </p>
                    </Col>
                    <Col>
                        <p className="card-label-info my-0">{device?.mobileDevice.model}</p>
                    </Col>
                    <Col className="card-label-info">
                        <p className="my-0">{device?.terminalId}</p>
                        <p className="my-0">{device?.terminalName}</p>
                    </Col>
                </Row>
            </div>
            <InfiniteScroll
                className="px-3 mb-5"
                dataLength={loginHistory === null ? 0 : loginHistory.length}
                next={() => null}
                loader={<p>Loading...</p>}
                hasMore={false}
                height={480}
                endMessage={<p>Final...</p>}
            >
                <TableLoginHistory loginHistory={loginHistory} />
            </InfiniteScroll>
        </>
    );
};

const DropdownItem = ({ id, name }: PointOfSale) => (
    <>
        <p className="label-id d-inline-block m-0">{id}</p>
        <img className="float-right mt-2" src={IconFavTpa} alt="favorite"></img>
        <p className="label-tpa m-0">{name}</p>
    </>
);

export default ModalDetailDevice;
