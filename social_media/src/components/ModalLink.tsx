import React, { MouseEventHandler, ReactNode } from "react";

type ModalLinkProps = {
  btnClassNames: string;
  onClick: () => void;
  modal: React.JSX.Element;
  children: ReactNode;
};

export default function ModalLink(props: ModalLinkProps) {
  return (
    <>
      <button
        type="button"
        className={props.btnClassNames + " px-2"}
        onClick={props.onClick}
        data-bs-toggle="modal"
        data-bs-target="#customModal"
      >
        {props.children}
      </button>
      {props.modal}
    </>
  );
}
