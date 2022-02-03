import { PointOfSale } from '../../../api/generated/gpo';

export type TypeModalNewDevice = {
    showModal?: boolean;
    pointsOfSale: PointOfSale[] | null;
    onRequestClose?: any;
};

export type TypeModalDetailsDevice = {
    showModal?: boolean;
    onRequestClose?: any;
    deviceId: string;
};

export type TypeModalCancelDevice = {
    showModal?: boolean;
    onRequestClose?: any;
};
