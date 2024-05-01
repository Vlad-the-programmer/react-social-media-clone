import React, { ReactNode } from "react";

type ModalProps = {
  title: string;
  buttonName: string;
  children: ReactNode;
};

export default function Modal(props: ModalProps) {
  return (
    <div
      id="customModal"
      className="modal fade"
      tabIndex={-1}
      aria-labelledby="customModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fs-5" id="customModalLabel">
              {props.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>{props.children}</p>
          </div>
          {/* <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              {props.buttonName}
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
