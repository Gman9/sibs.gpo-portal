import React from 'react';
import { useTimer } from 'react-timer-hook';
import { TypeTimer } from './types';

const Timer = ({ className, expiryTimestamp, timeOutMsg, autoStart, onExpire }: TypeTimer) => {
    const { seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({
        autoStart: autoStart,
        expiryTimestamp: expiryTimestamp,
        onExpire: onExpire,
    });

    return (
        <>
            <div className={className}>
                {minutes}m:{seconds}s
            </div>
            {hours === 0 && minutes === 0 && seconds === 0 && timeOutMsg}
        </>
    );
};

export default Timer;
