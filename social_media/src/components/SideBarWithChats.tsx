import React from "react";

type SideBarWithChatsProps = {
  chatObj: Array<any>;
};

export default function SideBarWithChats(props: SideBarWithChatsProps) {
  return (
    <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
      {/* <h5 className="font-weight-bold mb-3 text-center text-lg-start">
        Member
      </h5> */}

      <div className="card">
        <div className="card-body">
          <ul className="list-unstyled mb-0">
            {props.chatObj.map((chat, i) => {
              return (
                <>
                  <li
                    className="p-2 border-bottom"
                    style={{ backgroundColor: "#eee" }}
                  >
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row">
                        <a href="#">
                          <img
                            src={chat.avatarLink}
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                        </a>

                        <div className="pt-1">
                          <p className="fw-bold mb-0">{chat.username}</p>
                          <p className="small text-muted">
                            {chat.receivedMessage}
                          </p>
                        </div>
                      </div>
                      <div className="pt-1">
                        <p className="small text-muted mb-1">
                          {chat.dateAndTimeLastWasOnline}
                        </p>
                        <span className="badge bg-danger float-end">
                          {chat.receivedMessageCount}
                        </span>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
