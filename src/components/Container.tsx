import React, { ReactElement, ReactNode } from 'react';

type ContainerProps = {
    children: React.ReactNode;
}

export function Container ({children}: ContainerProps): React.ReactElement {
    return (
        <div className="container">
            {children}
        </div>
    )
}