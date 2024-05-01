import React, { ReactNode } from "react";
import UserAvatar from "./UserAvatar";

type NotificationProps = {
  dateAndTimeReceived: string;
  text: string;
  avatarLink: string;
  receivedMessageCount: string;
};

export default function Notification(props: NotificationProps) {
  return (
    <li className="p-2 border-bottom" style={{ backgroundColor: "#eee" }}>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-row">
          <a href="#">
            <UserAvatar
              avatarUrl={props.avatarLink}
              width="60px"
              height="60px"
              classNames="d-flex align-self-center me-3 shadow-1-strong"
            />
          </a>

          <div className="pt-1">
            <p className="fw-bold mb-0"></p>
            <p className="small text-muted">{props.text}</p>
          </div>
        </div>
        <div className="pt-1">
          <p className="small text-muted mb-1">{props.dateAndTimeReceived}</p>
          <span className="badge bg-danger float-end">
            {props.receivedMessageCount}
          </span>
        </div>
      </div>
    </li>
  );
}
