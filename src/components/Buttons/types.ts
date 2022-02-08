import { TFunctionResult } from 'i18next';
import { ReactChild } from 'react';

export type TypeButton = {
    children: ReactChild | TFunctionResult;
    className?: string;
    textClassName?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
