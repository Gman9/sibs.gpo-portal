import { DayRange } from 'react-modern-calendar-datepicker';
import { Authentication, Device } from '../../../api/generated/gpm';
import { Status, TypeDeviceCheck } from '../types';

export type TypeTableDevices = {
    devices: TypeDeviceCheck[] | null;
    devicesSelected: string[];
    setDevicesSelected: React.Dispatch<React.SetStateAction<string[]>>;
    activeStatus: Status;
};

export type TypeTableLoginHistory = {
    loginHistory: Authentication[] | null;
};

export type TypeFilterValues = {
    deviceID: string | null;
    state: string | null;
    creation: DayRange | null;
    user: string | null;
    terminal: string | null;
    lastActivity: DayRange | null;
};
