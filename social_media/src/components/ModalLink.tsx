import React, { MouseEventHandler, ReactNode } from "react";

type ModalLinkProps = {
  //   text: string;
  // onClick: MouseEventHandler<HTMLAnchorElement>;
  modal: React.JSX.Element;
  children: ReactNode;
};

export default function ModalLink(props: ModalLinkProps) {
  return (
    <>
      <button
        type="button"
        className="nav-link px-2"
        // onClick={props.onClick}
        data-bs-toggle="modal"
        data-bs-target="#customModal"
      >
        {props.children}
      </button>
      {props.modal}
    </>
  );
}
