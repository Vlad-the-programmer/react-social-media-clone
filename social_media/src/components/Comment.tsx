import React, { ReactNode } from "react";
import Icon from "./Icon";

type PostCommentsProps = {
  text: string;
  authorUsername: string;
  dateAndTimeCreated: string;
  status: string;
  children: ReactNode;
};

export default function Comment(props: PostCommentsProps) {
  function getStatusBadgeColor() {
    if (props.status === "Pending") {
      return "bg-primary";
    } else if (props.status === "Approved") {
      return "bg-success";
    } else if (props.status === "Rejected") {
      return "bg-danger";
    }
  }
  return (
    <div className="d-flex flex-start">
      {props.children}
      <div>
        <h6 className="fw-bold mb-1 my-2">{props.authorUsername}</h6>
        <div className="d-flex align-items-center mb-3">
          <p className="mb-0">
            {props.dateAndTimeCreated}
            <span className={`badge ${getStatusBadgeColor()} mx-2`}>
              {props.status}
            </span>
          </p>
          <a href="#!" className="link-muted">
            <Icon width="16" height="16" className="bi bi-pencil">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
            </Icon>
          </a>
          <a href="#!" className="link-muted">
            <Icon width="16" height="16" className="bi bi-suit-heart">
              <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
            </Icon>
          </a>
        </div>
        <p className="mb-0">{props.text}</p>
      </div>
    </div>
  );
}
