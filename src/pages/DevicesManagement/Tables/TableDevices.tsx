import React, { useEffect, useState } from 'react';
import TableCellStatus from '../../../components/Tables/Cells/TableCellStatus';
import Table from '../../../components/Tables/Table';
import { TableCell } from '../../../components/Tables/Table.Body';
import { ModalConsumer } from '../../../contexts/ModalContext/ModalContext';
import ModalDetailDevice from '../Modals/ModalDetailDevice';
import TableCellCheck from '../../../components/Tables/Cells/TableCellCheck';
import { TypeFilterValues, TypeTableDevices } from './types';
import { TypeDeviceCheck } from '../types';
import 'moment/locale/pt';
import moment from 'moment';
import i18n from '../../../i18n';
import { DayRange } from 'react-modern-calendar-datepicker';
import FilterCalendar from '../../../components/Tables/Filters/FilterCalendar/FilterCalendar';
import FilterSearch from '../../../components/Tables/Filters/FilterSearch/FilterSearch';
import FilterList from '../../../components/Tables/Filters/FilterList/FilterList';

import './Tables.scss';

const TableDevices = ({ devices, devicesSelected, setDevicesSelected, activeStatus }: TypeTableDevices) => {
    const [allDevicesCheck, setAllDevicesCheck] = useState<boolean>(false);
    const [filterValues, setFilterValues] = useState<TypeFilterValues>({
        deviceID: null,
        state: null,
        creation: null,
        user: null,
        terminal: null,
        lastActivity: null,
    });

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
                <Table.Column
                    className="text-center"
                    filter={
                        <FilterSearch
                            placeholder="Procurar um id de dispositivo"
                            onChange={(value: string) => {
                                setFilterValues({
                                    ...filterValues,
                                    deviceID: value,
                                });
                            }}
                        />
                    }
                >
                    <span>{i18n.t('devices.device_id').toUpperCase()}</span>
                </Table.Column>
                <Table.Column className="text-center" filter={<FilterList />}>
                    <span>{i18n.t('devices.state').toUpperCase()}</span>
                </Table.Column>
                <Table.Column
                    className="text-center"
                    filter={
                        <FilterCalendar
                            onChange={(value: DayRange) => {
                                setFilterValues({
                                    ...filterValues,
                                    creation: value,
                                });
                            }}
                        />
                    }
                >
                    <span>{i18n.t('devices.creation').toUpperCase()}</span>
                </Table.Column>
                <Table.Column
                    className="text-center"
                    filter={
                        <FilterSearch
                            placeholder="Procurar um user"
                            onChange={(value: string) => {
                                setFilterValues({
                                    ...filterValues,
                                    user: value,
                                });
                            }}
                        />
                    }
                >
                    <span>{i18n.t('devices.user').toUpperCase()}</span>
                </Table.Column>
                <Table.Column
                    className="text-center"
                    filter={
                        <FilterSearch
                            placeholder="Procurar um terminal"
                            onChange={(value: string) => {
                                setFilterValues({
                                    ...filterValues,
                                    terminal: value,
                                });
                            }}
                        />
                    }
                >
                    <span>{i18n.t('devices.terminal').toUpperCase()}</span>
                </Table.Column>
                <Table.Column
                    className="text-center"
                    filter={
                        <FilterCalendar
                            onChange={(value: DayRange) => {
                                setFilterValues({
                                    ...filterValues,
                                    lastActivity: value,
                                });
                            }}
                        />
                    }
                >
                    <span>{i18n.t('devices.last_activity').toUpperCase()}</span>
                </Table.Column>
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
                                        showModal(ModalDetailDevice, {
                                            showModal: true,
                                            deviceId: d.device.deviceId,
                                        });
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
                                    <TableCell>{d.device.loggedBy}</TableCell>
                                    <TableCell>
                                        <>
                                            <p className="m-0">{d.device.terminalId}</p>
                                            <p className="terminal-name m-0">{d.device.terminalName}</p>
                                        </>
                                    </TableCell>
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
