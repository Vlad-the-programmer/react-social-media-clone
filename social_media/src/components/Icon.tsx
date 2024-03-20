import React, { ReactNode } from "react";

type IconProps = {
    xmlns: string,
    width: string,
    height: string,
    fill: string,
    className: string,
    viewBox: string,
    path: ReactNode,
}

function Icon(props: IconProps) {
    return (
            <svg 
                xmlns={props.xmlns}
                width={props.width}
                height={props.height} 
                fill={props.fill}
                className={props.className} 
                viewBox={props.viewBox}
            >
                {props.path}
            </svg>
    );
}

export default Icon;