import { Device } from '../../api/generated/gpm';
import i18n from '../../i18n';

export type TypeDeviceCheck = {
    device: Device;
    check: boolean;
};

export enum Status {
    All = i18n.t('devices.all').toUpperCase() as any,
    Active = i18n.t('devices.active').toUpperCase() as any,
    Disabled = i18n.t('devices.inactive').toUpperCase() as any,
    Pending = i18n.t('devices.pending').toUpperCase() as any,
}
