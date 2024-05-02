import React, { ReactNode } from "react";
import UserAvatar from "./UserAvatar";

type NotificationProps = {
  dateAndTimeReceived: string;
  text: string;
  avatarLink: string;
  receivedMessageCount: string;
};

export default function Notification(props: NotificationProps) {
  const textLength = 35;
  function getSlicedNotificationText(text: string) {
    if (text.length <= 35) return text + "...";

    var newText = props.text.substring(0, text.indexOf(".") + 1);
    return newText.length <= 35
      ? newText + ".."
      : newText.substring(0, textLength + 1) + "...";
  }
  return (
    <li className="p-3 border-bottom" style={{ backgroundColor: "#eee" }}>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-row">
          <a href="#">
            <UserAvatar
              avatarUrl={props.avatarLink}
              width="45px"
              height="50px"
              classNames="d-flex align-self-center me-3 shadow-1-strong"
            />
          </a>

          <div className="row pt-1">
            <p className="fw-bold mb-0"></p>

            <p className="col small text-muted mb-1">
              {props.dateAndTimeReceived}
            </p>
            <div className="col  badge bg-danger float-end mx-2 mb-1 mt-1">
              {props.receivedMessageCount}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-1">
        <p className="small text-muted">
          {getSlicedNotificationText(props.text)}
        </p>
      </div>
    </li>
  );
}
