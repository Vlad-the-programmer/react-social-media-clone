import React, { ReactNode } from "react";
import Icon from "./Icon";
import useToast from "../utils/useToast";

type ToastPropsType = {
  title: string;
  message: string;
  children: ReactNode;
};

export default function Toast(props: ToastPropsType) {
  const { toastRef, hideToast } = useToast();
  return (
    <div
      className="toast top-0 start-50 translate-middle-x"
      role="alert"
      ref={toastRef}
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        {/* <img src="..." className="rounded me-2" alt="..." /> */}
        <Icon width="16" height="16" className="bi bi-check2-circle">
          {props.children}
        </Icon>
        <strong className="me-auto">{props.title}</strong>
        {/* <small>11 mins ago</small> */}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
          onClick={hideToast}
        ></button>
      </div>
      <div className="toast-body">{props.message}</div>
    </div>
  );
}
