import React from 'react';
import TableCellStatus from '../../components/Tables/Cells/TableCellStatus';
import Table from '../../components/Tables/Table';
import { TableCell } from '../../components/Tables/Table.Body';
import { devicesInfo } from './dummyData';
import { ModalConsumer } from '../../contexts/ModalContext/ModalContext';
import ModalDetailDevice from './Modals/ModalDetailDevice';
import FilterIcon from '../../assets/imgs/icons/ic-filter.svg';
import { Button } from '../../components/Buttons/Button';
import TableCellCheck from '../../components/Tables/Cells/TableCellCheck';

import './DevicesManagement.scss';

const headerData = [
    { title: 'ID DISPOSITIVO' },
    { title: 'ESTADO' },
    { title: 'CRIAÇÃO' },
    { title: 'UTILIZADOR' },
    { title: 'TERMINAL' },
    { title: 'ÚLTIMA ACTIVIDADE' },
];
/*devices.map(obj=> ({ ...obj, checked: 'false' }))*/
const TableDevices = () => {
    return (
        <Table className="table-responsive-md">
            <Table.Header>
                {/*This need to change for th*/}
                <TableCellCheck className="text-center align-middle p-0 " id="all-devices" checked={false} />
                <>
                    {headerData.map((header, idx) => (
                        <Table.Column className="text-center" key={idx}>
                            <span>{header.title}</span>
                            <Button className="btn-transparent ml-1">
                                <img alt="filter" src={FilterIcon} />
                            </Button>
                        </Table.Column>
                    ))}
                </>
            </Table.Header>
            <ModalConsumer>
                {({ showModal }) => (
                    <Table.Body>
                        {devicesInfo.map((device) => (
                            <Table.Row
                                key={device.id}
                                className="text-center"
                                onClick={() => {
                                    showModal(ModalDetailDevice, { showModal: true });
                                }}
                            >
                                <TableCellCheck
                                    id={`check-${device.id}`}
                                    onClick={(e: any) => e.stopPropagation()}
                                    checked={false}
                                />
                                <TableCell>{device.id}</TableCell>
                                <TableCellStatus status={device.status} />
                                <TableCell>{device.create}</TableCell>
                                <TableCell>{device.user}</TableCell>
                                <TableCell>{device.terminal}</TableCell>
                                <TableCell>{device.last_activity}</TableCell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                )}
            </ModalConsumer>
        </Table>
    );
};

export default TableDevices;
