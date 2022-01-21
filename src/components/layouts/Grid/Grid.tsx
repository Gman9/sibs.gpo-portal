import React from 'react';

type TypeGrid = {
    children: React.ReactNode;
    container?: boolean;
    item?: boolean;
    className?: string | null;
};

export const Grid = ({ children, container, item, className }: TypeGrid) => {
    return <div className={`container ${className ? className : ''}`}>{children}</div>;
};
