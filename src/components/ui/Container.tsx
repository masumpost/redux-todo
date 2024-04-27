// import React from 'react';

import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="w-5/6 h-screen mx-auto">
            {children}
        </div>
    );
};

export default Container;