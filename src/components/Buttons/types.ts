import { ReactChild } from 'react';

export type TypeButton = {
    children: ReactChild;
    className?: string;
    textClassName?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
