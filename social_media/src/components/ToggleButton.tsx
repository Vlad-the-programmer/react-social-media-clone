import React, { useState, ReactNode } from "react";
import { useToggle } from "../hooks/useToggle";

type ToggleButtonProps = {
  children: ReactNode;
  buttonName: string;
};
export default function ToggleButton(props: ToggleButtonProps) {
  const [toggle, setToggle] = useToggle();

  return (
    <>
      <button
        onClick={() => setToggle(!toggle)}
        className="btn btn-primary mb-5 mt-2"
      >
        {props.buttonName}
      </button>
      {toggle && props.children}
    </>
  );
}
