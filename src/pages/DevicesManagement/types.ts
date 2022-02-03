import { Device } from '../../api/generated/gpm';

export type TypeDeviceCheck = {
    device: Device;
    check: boolean;
};

export enum Status {
    All = 'TODOS' as any,
    Active = 'ACTIVOS' as any,
    Disabled = 'INACTIVOS' as any,
    Pending = 'PENDENTES' as any,
}
