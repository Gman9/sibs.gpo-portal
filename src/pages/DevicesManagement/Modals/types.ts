import { Device } from '../../../api/generated/gpm';
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

export type TypeDeviceDetail = {
    device: Device | null;
    dropdownValue: PointOfSale | null;
    setDropdownValue: React.Dispatch<React.SetStateAction<PointOfSale | null>>;
    pointsOfSale: PointOfSale[] | null;
    setPointsOfSale: React.Dispatch<React.SetStateAction<PointOfSale[] | null>>;
};

export type TypeLoginHistory = {
    device: Device | null;
};
