import React from 'react';
import Table from '../../../components/Tables/Table';
import { TableCell } from '../../../components/Tables/Table.Body';
import ICOrderDescending from '../../../assets/imgs/icons/ic-order-descending.svg';
import { Button } from '../../../components/Buttons/Button';
import i18n from '../../../i18n';
import { TypeTableLoginHistory } from './types';
import 'moment/locale/pt';
import moment from 'moment';

import '../DevicesManagement.scss';

const headerData = [
    { title: i18n.t('devices.user').toUpperCase() },
    { title: i18n.t('devices.login_date').toUpperCase() },
    { title: i18n.t('devices.logout_date').toUpperCase() },
];

const TableLoginHistory = ({ loginHistory }: TypeTableLoginHistory) => {
    return (
        <Table className="table-responsive-md">
            <Table.Header>
                {headerData.map((header, idx) => (
                    <Table.Column className="text-center" key={idx}>
                        <Button className="btn-transparent mr-1">
                            <img alt="filter" src={ICOrderDescending} />
                        </Button>
                        <span>{header.title}</span>
                    </Table.Column>
                ))}
            </Table.Header>
            <Table.Body>
                <>
                    {loginHistory?.map((history) => (
                        <Table.Row key={`history-login-${history.user}`} className="text-center">
                            <TableCell>{history.user}</TableCell>
                            <TableCell>{moment(history.loginAt).locale('pt').format('DD MMM YYYY')}</TableCell>
                            <TableCell>{moment(history.logoutAt).locale('pt').format('DD MMM YYYY')}</TableCell>
                        </Table.Row>
                    ))}
                </>
            </Table.Body>
        </Table>
    );
};

export default TableLoginHistory;
