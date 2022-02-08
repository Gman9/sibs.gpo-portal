import React, { useContext, useEffect, useState } from 'react';
import TableDevices from './Tables/TableDevices';
import IconActions from '../../assets/imgs/icons/ic-actions.svg';
import { UserSessionContext } from '../../services/UserSession';
import Checkbox from '../../components/Checkboxes/Checkbox';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { Button } from '../../components/Buttons/Button';
import { Row, Col } from 'react-bootstrap';
import { apiDevices } from '../../services/Api';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Status, TypeDeviceCheck } from './types';
import i18n from '../../i18n';

import './DevicesManagement.scss';

const filterStatus = [Status.All, Status.Active, Status.Disabled, Status.Pending];

const DevicesManagement = () => {
    const UserSession = useContext(UserSessionContext);
    const [activeStatus, setActiveStatus] = useState<Status>(filterStatus[0]);
    const [devicesSelected, setDevicesSelected] = useState<string[]>([]);
    const [devices, setDevices] = useState<TypeDeviceCheck[] | null>(null);

    useEffect(() => {
        const filterParam = activeStatus === Status.All ? undefined : `status eq '${encodeURI(Status[activeStatus])}'`;
        apiDevices
            .getAllDevices('21', undefined, undefined, undefined, filterParam)
            .then((resp) => {
                const devices = resp.data.map((device) => ({ device, check: false }));
                setDevices(devices);
                setDevicesSelected([]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [activeStatus]);

    return (
        <Row className="justify-content-md-center p-5 m-0">
            <Col xl={8}>
                <div className="mx-auto">
                    <div className="d-flex px-3">
                        {filterStatus.map((btn) => (
                            <Button
                                key={btn}
                                className={`btn-transparent mr-5 ${activeStatus === btn ? 'btn-active' : ''}`}
                                textClassName="btn-filter-text"
                                onClick={() => setActiveStatus(btn)}
                            >
                                {btn}
                            </Button>
                        ))}
                    </div>
                    <div className="d-flex justify-content-end align-items-center px-3 mb-1">
                        <Checkbox
                            className="square"
                            id="total-devices-selected"
                            labelClassName="devices-selected"
                            labelText={`${devicesSelected.length} / ${devices?.length} ${i18n.t('devices.selected')} `}
                            checked={devicesSelected.length > 0}
                        />
                        <OverlayTrigger
                            trigger={['focus', 'click']}
                            rootClose
                            placement="bottom"
                            overlay={
                                <Popover className="popover-table-actions" id="popover-table-actions">
                                    <Popover.Body className="popover-body-table-actions">
                                        <div className="popover-item-table-actions">{i18n.t('devices.export')}</div>
                                        <OverlayTrigger
                                            trigger={['focus', 'click']}
                                            rootClose
                                            placement="right"
                                            overlay={
                                                <Popover className="popover-table-actions" id="popover-change-state">
                                                    <Popover.Body className="popover-body-table-actions">
                                                        <div className="popover-item-table-actions">
                                                            {i18n.t('devices.disable')}
                                                        </div>
                                                        <div className="popover-item-table-actions">
                                                            {i18n.t('devices.cancel')}
                                                        </div>
                                                    </Popover.Body>
                                                </Popover>
                                            }
                                        >
                                            <div className="popover-item-table-actions">
                                                {i18n.t('devices.change_state')}
                                            </div>
                                        </OverlayTrigger>
                                        <div className="popover-item-table-actions">
                                            {i18n.t('devices.force_logout')}
                                        </div>
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <img className="table-actions ml-2" width={3} height={12} src={IconActions} alt="Actions" />
                        </OverlayTrigger>
                    </div>
                    <InfiniteScroll
                        className="infinite-scroll-custom px-3"
                        dataLength={devices === null ? 0 : devices.length}
                        next={() => null}
                        loader={<p>Loading...</p>}
                        hasMore={false}
                        height={window.innerHeight - 220}
                        endMessage={<p>Final...</p>}
                    >
                        <TableDevices
                            devices={devices}
                            devicesSelected={devicesSelected}
                            setDevicesSelected={setDevicesSelected}
                            activeStatus={activeStatus}
                        />
                    </InfiniteScroll>
                </div>
            </Col>
        </Row>
    );
};

export default DevicesManagement;
