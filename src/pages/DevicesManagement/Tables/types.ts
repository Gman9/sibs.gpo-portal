import { Status, TypeDeviceCheck } from '../types';

export type TypeTableDevices = {
    devices: TypeDeviceCheck[] | null;
    devicesSelected: string[];
    setDevicesSelected: React.Dispatch<React.SetStateAction<string[]>>;
    activeStatus: Status;
};
