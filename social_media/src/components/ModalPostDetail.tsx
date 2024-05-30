import React, { ReactNode, useState } from "react";
import Column from "./Column";
import sizeEnum from "./SizeEnum";
import Comment from "./Comment";
import UserAvatar from "./UserAvatar";
import { PROFILE } from "../constants/routes";

export type ModalPostDetailProps = {
  children: ReactNode;
  imageLink: string;
  comments: Array<any>;
};

export const renderComments = (props: ModalPostDetailProps) => {
  return (
    <>
      <div className="container my-2 py-3">
        <div className="row d-flex justify-content-center">
          <div className="col-md-9 col-lg-12">
            <div className="card">
              <div className="card-body p-4">
                <h4 className="mb-0">Recent comments</h4>
                <span className="commentCount">
                  {props.comments.length} Comments...
                </span>
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
                        key={i}
                        text={obj.commentText}
                        authorUsername={obj.authorUsername}
                        dateAndTimeCreated={obj.dateAndTimeCreated}
                        status={obj.status}
                      >
                        <UserAvatar
                          avatarUrl={obj.avatarLink}
                          avatarLink={PROFILE}
                          width="50px"
                          height="60px"
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
          <div
            className="d-flex align-items-center me-5 justify-content-between mt-3"
            style={{ width: "98%" }}
          >
            <div className="d-flex align-items-center">
              <img
                src={process.env.PUBLIC_URL + "/icons/like.png"}
                alt=""
                className="reactionPic"
              />
              <img
                src={process.env.PUBLIC_URL + "/icons/love.png"}
                alt=""
                className="reactionPic"
              />
              <img
                src={process.env.PUBLIC_URL + "/icons/haha.png"}
                alt=""
                className="reactionPic"
              />
              <span className="likeCount">
                Sachith Mihikalpa and 125 others.
              </span>
            </div>
          </div>
        </Column>
        {renderComments(props)}
      </div>
    </Column>
  );
}
