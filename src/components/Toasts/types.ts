import { ReactChild } from 'react';

export type TypeToast = {
    children: ReactChild | ReactChild[];
    className?: string;
    delay: number | undefined;
};
