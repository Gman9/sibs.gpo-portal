import { JSXElementConstructor, ReactElement } from 'react';

export type TypeTooltip = {
    children: ReactElement<any, string | JSXElementConstructor<any>>;
    className?: string;
    content?: string | ReactElement;
};
