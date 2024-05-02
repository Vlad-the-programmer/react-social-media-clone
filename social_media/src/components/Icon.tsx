import React, { ReactNode } from "react";

type IconProps = {
  width: string;
  height: string;
  className: string;
  children: ReactNode;
};

function Icon(props: IconProps) {
  return (
    <span className="m-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        fill="currentColor"
        className={props.className}
        viewBox="0 0 16 16"
      >
        {props.children}
      </svg>
    </span>
  );
}

export default Icon;
