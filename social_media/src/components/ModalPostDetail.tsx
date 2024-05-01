import React, { ReactNode, useState } from "react";
import Column from "./Column";
import sizeEnum from "./SizeEnum";
import Comment from "./Comment";
import UserAvatar from "./UserAvatar";

type ModalPostDetailProps = {
  children: ReactNode;
  imageLink: string;
  comments: Array<any>;
};

const renderComments = (props: ModalPostDetailProps) => {
  return (
    <>
      <div className="container my-2 py-3">
        <div className="row d-flex justify-content-center">
          <div className="col-md-9 col-lg-12">
            <div className="card">
              <div className="card-body p-4">
                <h4 className="mb-0">Recent comments</h4>
                <p className="fw-light mb-4 pb-2">
                  Latest Comments section by users
                </p>
                <div
                  className=""
                  style={{
                    position: "relative",
                    height: "500px",
                    overflow: "scroll",
                  }}
                >
                  {props.comments.map((obj, i) => {
                    return (
                      <Comment
                        text={obj.commentText}
                        authorUsername={obj.authorUsername}
                        dateAndTimeCreated={obj.dateAndTimeCreated}
                        status={obj.status}
                      >
                        <UserAvatar
                          avatarUrl={obj.avatarLink}
                          width="45px"
                          height="100%"
                          classNames="shadow-1-strong me-3"
                        />
                      </Comment>
                    );
                  })}
                </div>
              </div>

              <hr className="my-0" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function ModalPostDetail(props: ModalPostDetailProps) {
  return (
    <Column smallSize={sizeEnum.twelve} classNames={["my-1"]}>
      <div className="row">
        <Column smallSize={sizeEnum.six} classNames={["my-1"]}>
          <img
            src={props.imageLink}
            className="card-img-top"
            alt="..."
            width="100%"
            height="100%"
          />
        </Column>

        <Column smallSize={sizeEnum.six} classNames={["my-1"]}>
          {props.children}
        </Column>
        {renderComments(props)}
      </div>
    </Column>
  );
}
