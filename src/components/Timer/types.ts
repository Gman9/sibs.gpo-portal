export type TypeTimer = {
    className?: string;
    expiryTimestamp: Date;
    timeOutMsg: string | React.ReactElement<any, any>;
    autoStart: boolean;
    onExpire?: () => void;
};
