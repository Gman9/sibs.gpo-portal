import React, { useContext, useEffect, useState } from 'react';
import { devicesInfo } from './dummyData';
import InfiniteScroll from 'react-infinite-scroll-component';
import TableDevices from './TableDevices';
import IconActions from '../../assets/imgs/icons/ic-actions.svg';
import { UserSessionContext } from '../../services/UserSession';
import Checkbox from '../../components/Checkboxes/Checkbox';
import { apiReferences, apiPointsOfSale } from '../../services/Api';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { Button } from '../../components/Buttons/Button';
import { Row, Col } from 'react-bootstrap';

import './DevicesManagement.scss';

const btnsFilter = ['TODOS', 'ACTIVOS', 'INACTIVOS', 'PENDENTES'];

const DevicesManagement = () => {
    const UserSession = useContext(UserSessionContext);
    const [activeBtn, setActiveBtn] = useState(btnsFilter[0]);

    /*     useEffect(() => {
        apiPointsOfSale
            .getAllMerchantPos(
                '21',
                //props.tableParams.getTop().toString(),
                // props.tableParams.getOrderBy(),
                //props.tableParams.getFilter()
            )
            .then((resp) => {
                debugger;
                console.log(resp);
            })
            .catch((err) => {
                debugger;
                console.log(err);
            });
    }); */

    return (
        <Row className="justify-content-md-center p-5 m-0">
            <Col xl={8}>
                <div className="mx-auto">
                    <div className="d-flex px-3">
                        {btnsFilter.map((btn) => (
                            <Button
                                key={btn}
                                className={`btn-transparent mr-5 ${activeBtn === btn ? 'btn-active' : ''}`}
                                textClassName="btn-filter-text"
                                onClick={() => setActiveBtn(btn)}
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
                            labelText="0/50 selecionados"
                            checked={false}
                        />
                        <OverlayTrigger
                            trigger={['focus', 'click']}
                            rootClose
                            placement="bottom"
                            overlay={
                                <Popover className="popover-table-actions" id="popover-table-actions">
                                    <Popover.Body className="popover-body-table-actions">
                                        <div className="popover-item-table-actions">Exportar</div>
                                        <OverlayTrigger
                                            trigger={['focus', 'click']}
                                            rootClose
                                            placement="right"
                                            overlay={
                                                <Popover className="popover-table-actions" id="popover-change-state">
                                                    <Popover.Body className="popover-body-table-actions">
                                                        <div className="popover-item-table-actions">Desativar</div>
                                                        <div className="popover-item-table-actions">Anular</div>
                                                    </Popover.Body>
                                                </Popover>
                                            }
                                        >
                                            <div className="popover-item-table-actions">Alterar Estado</div>
                                        </OverlayTrigger>
                                        <div className="popover-item-table-actions">Forçar Logout</div>
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <img className="table-actions ml-2" width={3} height={12} src={IconActions} alt="Actions" />
                        </OverlayTrigger>
                    </div>
                    <InfiniteScroll
                        className="infinite-scroll-custom px-3"
                        dataLength={devicesInfo.length}
                        next={() => null}
                        loader={<p>Loading...</p>}
                        hasMore={false}
                        height={window.innerHeight - 220}
                        endMessage={<p>Final...</p>}
                    >
                        <TableDevices />
                    </InfiniteScroll>
                </div>
            </Col>
        </Row>
    );
};

export default DevicesManagement;
