import React from 'react';
import Table from '../../../components/Tables/Table';
import { TableCell } from '../../../components/Tables/Table.Body';
import { loginHistory } from './dummyLoginHistory';
import ICOrderDescending from '../../../assets/imgs/icons/ic-order-descending.svg';

import '../DevicesManagement.scss';
import { Button } from '../../../components/Buttons/Button';
import InfiniteScroll from 'react-infinite-scroll-component';

const headerData = [{ title: 'UTILIZADOR' }, { title: 'DATA DE LOGIN' }, { title: 'DATA DE LOGOUT' }];

const TableLoginHistory = () => {
    return (
        <InfiniteScroll
            className="px-3 mb-5"
            dataLength={loginHistory.length}
            next={() => null}
            loader={<p>Loading...</p>}
            hasMore={false}
            height={480}
            endMessage={<p>Final...</p>}
        >
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
                    {loginHistory.map((history) => (
                        <Table.Row key={history.id} className="text-center">
                            <TableCell>{history.user}</TableCell>
                            <TableCell>{history.login}</TableCell>
                            <TableCell>{history.logout}</TableCell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </InfiniteScroll>
    );
};

export default TableLoginHistory;
