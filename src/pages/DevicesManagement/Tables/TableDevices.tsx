import React, { useEffect, useState } from 'react';
import TableCellStatus from '../../../components/Tables/Cells/TableCellStatus';
import Table from '../../../components/Tables/Table';
import { TableCell } from '../../../components/Tables/Table.Body';
import { ModalConsumer } from '../../../contexts/ModalContext/ModalContext';
import ModalDetailDevice from '../Modals/ModalDetailDevice';
import FilterIcon from '../../../assets/imgs/icons/ic-filter.svg';
import { Button } from '../../../components/Buttons/Button';
import TableCellCheck from '../../../components/Tables/Cells/TableCellCheck';
import { TypeTableDevices } from './types';
import 'moment/locale/pt';
import moment from 'moment';
import { TypeDeviceCheck } from '../types';

const headerData = [
    { title: 'ID DISPOSITIVO' },
    { title: 'ESTADO' },
    { title: 'CRIAÇÃO' },
    { title: 'UTILIZADOR' },
    { title: 'TERMINAL' },
    { title: 'ÚLTIMA ACTIVIDADE' },
];

const TableDevices = ({ devices, devicesSelected, setDevicesSelected, activeStatus }: TypeTableDevices) => {
    const [allDevicesCheck, setAllDevicesCheck] = useState<boolean>(false);

    useEffect(() => {
        setAllDevicesCheck(devices === null || devices.length <= 0 ? false : devicesSelected.length === devices.length);
    }, [activeStatus, devices, devicesSelected.length]);

    const handleCheckBoxHeaderClick = () => {
        setDevicesSelected([]);
        if (allDevicesCheck) {
            devices?.forEach((d) => (d.check = false));
        } else if (devices !== null) {
            setDevicesSelected(
                devices.map((d) => {
                    if (!d.check) {
                        d.check = true;
                    }
                    return d.device.deviceId;
                }),
            );
        }
    };

    const handleCheckboxClick = (d: TypeDeviceCheck) => {
        if (d.check) {
            setDevicesSelected(devicesSelected.filter((deviceId) => deviceId !== d.device.deviceId));
            d.check = false;
        } else {
            setDevicesSelected([...devicesSelected, d.device.deviceId]);
            d.check = true;
        }
    };

    return (
        <Table className="table-responsive-md">
            <Table.Header>
                <TableCellCheck
                    className="text-center align-middle p-0 "
                    id="all-devices"
                    checked={allDevicesCheck}
                    onCheckBoxClick={() => handleCheckBoxHeaderClick()}
                />
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
                        {devices === null ? (
                            <div>ToDo Loading...</div>
                        ) : (
                            devices.map((d) => (
                                <Table.Row
                                    key={d.device.deviceId}
                                    className="text-center"
                                    onClick={() => {
                                        showModal(ModalDetailDevice, { showModal: true });
                                    }}
                                >
                                    <TableCellCheck
                                        id={`check-${d.device.deviceId}`}
                                        onClick={(e: any) => e.stopPropagation()}
                                        onCheckBoxClick={() => handleCheckboxClick(d)}
                                        checked={d.check}
                                    />
                                    <TableCell>{d.device.deviceId}</TableCell>
                                    <TableCellStatus status={d.device.status} />
                                    <TableCell>
                                        {moment(d.device.creationDate).locale('pt').format('DD MMM YYYY')}
                                    </TableCell>
                                    <TableCell>USER</TableCell>
                                    <TableCell>{d.device.terminalId}</TableCell>
                                    <TableCell>
                                        {moment(d.device.updatedDate).locale('pt').format('DD MMM YYYY HH:mm')}
                                    </TableCell>
                                </Table.Row>
                            ))
                        )}
                    </Table.Body>
                )}
            </ModalConsumer>
        </Table>
    );
};

export default TableDevices;
