import React, { ReactNode } from "react";
import SideBarWithChats from "../components/SideBarWithChats";
import Icon from "../components/Icon";
import UserAvatar from "../components/UserAvatar";
import { PROFILE } from "../constants/routes";

type ChatProps = {
  senderName: string;
  receiverName: string;
  children: ReactNode;
  senderImgUrl: string;
  receiverImgUrl: string;
  senderMessageAndDateTime: Array<any>;
  receiverMessageAndDateTime: Array<any>;
};

const renderMessages = (props: ChatProps) => {
  return props.senderMessageAndDateTime.map((v, i) => {
    return (
      <>
        <div className="d-flex justify-content-between">
          <p className="small mb-1">{props.senderName}</p>
          <p className="small mb-1 text-muted">
            {props.senderMessageAndDateTime[i].dateAndTime}
          </p>
        </div>
        <div className="d-flex flex-row justify-content-start">
          <UserAvatar
            avatarUrl={props.senderImgUrl}
            avatarLink={PROFILE}
            width="50px"
            height="60px"
            classNames=""
          />
          <div>
            <p
              className="small p-2 ms-3 mb-3 rounded-3"
              style={{ backgroundColor: "#f5f6f7" }}
            >
              {props.senderMessageAndDateTime[i].message}
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <p className="small mb-1 text-muted">
            {props.receiverMessageAndDateTime[i].dateAndTime}
          </p>
          <p className="small mb-1">{props.receiverName}</p>
        </div>
        <div className="d-flex flex-row justify-content-end mb-4 pt-1">
          <div>
            <p className="small p-2 me-3 mb-3 text-white rounded-3 bg-warning">
              {props.receiverMessageAndDateTime[i].message}
            </p>
          </div>
          <UserAvatar
            avatarUrl={props.receiverImgUrl}
            avatarLink={PROFILE}
            width="50px"
            height="60px"
            classNames=""
          />
        </div>
      </>
    );
  });
};

export default function Chat(props: ChatProps) {
  return (
    <section style={{ width: "100%" }}>
      <div className="container py-2 px-0 ms-0">
        <div className="row d-flex justify-content-center mx-0 w-100">
          <SideBarWithChats
            chatObj={[
              {
                username: "John Mackhwell",
                receivedMessage: "Hey! How are you doing?",
                receivedMessageCount: 1,
                dateAndTimeLastWasOnline: "Just now",
                avatarLink:
                  "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp",
              },
              {
                username: "John Hawk",
                receivedMessage: "Hey! Whssup?",
                receivedMessageCount: 2,
                dateAndTimeLastWasOnline: "5 mins ago",
                avatarLink:
                  "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp",
              },
              {
                username: "Danny Smith",
                receivedMessage: "Hey! Whssup?",
                receivedMessageCount: 2,
                dateAndTimeLastWasOnline: "5 mins ago",
                avatarLink:
                  "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp",
              },
              {
                username: "Chris Brown",
                receivedMessage: "Hey! Whssup?",
                receivedMessageCount: 2,
                dateAndTimeLastWasOnline: "5 mins ago",
                avatarLink:
                  "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp",
              },
              {
                username: "Kate Moss",
                receivedMessage: "Hey! Whssup?",
                receivedMessageCount: 2,
                dateAndTimeLastWasOnline: "5 mins ago",
                avatarLink:
                  "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp",
              },
              {
                username: "Lara Croft",
                receivedMessage: "Hey! Whssup?",
                receivedMessageCount: 2,
                dateAndTimeLastWasOnline: "5 mins ago",
                avatarLink:
                  "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp",
              },
              {
                username: "Brad Pitt",
                receivedMessage: "Hey! Whssup?",
                receivedMessageCount: 2,
                dateAndTimeLastWasOnline: "5 mins ago",
                avatarLink:
                  "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp",
              },
              {
                username: "Brad Pitt",
                receivedMessage: "Hey! Whssup?",
                receivedMessageCount: 2,
                dateAndTimeLastWasOnline: "5 mins ago",
                avatarLink:
                  "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp",
              },
              {
                username: "Brad Pitt",
                receivedMessage: "Hey! Whssup?",
                receivedMessageCount: 2,
                dateAndTimeLastWasOnline: "5 mins ago",
                avatarLink:
                  "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp",
              },
              {
                username: "Brad Pitt",
                receivedMessage: "Hey! Whssup?",
                receivedMessageCount: 2,
                dateAndTimeLastWasOnline: "5 mins ago",
                avatarLink:
                  "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp",
              },
              {
                username: "Brad Pitt",
                receivedMessage: "Hey! Whssup?",
                receivedMessageCount: 2,
                dateAndTimeLastWasOnline: "5 mins ago",
                avatarLink:
                  "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp",
              },
            ]}
          />
          <div className="col-md-8 col-lg-8 col-xl-6">
            <div className="card">
              <div
                className="card-header d-flex justify-content-between align-items-center p-3"
                style={{ borderTop: "4px solid #ffa900" }}
              >
                <h5 className="mb-0">Chat messages</h5>
                <div className="d-flex flex-row align-items-center">
                  <span className="badge bg-warning me-3">
                    {props.senderMessageAndDateTime.length}
                  </span>
                  <Icon
                    width="16"
                    height="16"
                    className="bi bi-dash me-3 text-muted fa-xs"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                  </Icon>
                  <Icon
                    width="16"
                    height="16"
                    className="bi bi-x text-muted fa-xs"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </Icon>
                </div>
              </div>
              <div
                className="card-body overflow-scroll"
                style={{
                  height: "500px",
                }}
              >
                {renderMessages(props)}
              </div>
            </div>
            <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
              <div className="input-group mb-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type message"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-warning"
                  type="button"
                  id="button-addon2"
                  style={{ paddingTop: ".55rem;" }}
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
