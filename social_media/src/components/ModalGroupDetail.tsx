import React, { ReactNode } from "react";
import Column from "./Column";
import sizeEnum from "./SizeEnum";
import UserAvatar from "./UserAvatar";
import GroupPost from "./GroupPost";
import { PROFILE } from "../constants/routes";

type ModalGroupDetailProps = {
  children: ReactNode;
  imageLink: string;
  posts: Array<any>;
  groupDescription: string;
  comments: Array<any>;
};

const renderGroupPosts = (props: ModalGroupDetailProps) => {
  return (
    <>
      <div className="container my-2 py-3">
        <div className="row d-flex justify-content-center">
          <div className="col-md-9 col-lg-12">
            <div className="card">
              <div className="card-body p-4">
                <h4 className="mb-0">Group discussion</h4>
                {/* <p className="fw-light mb-4 pb-2">
                  Latest posts section by users
                </p> */}
                <div
                  className=""
                  style={{
                    position: "relative",
                    height: "500px",
                    overflow: "scroll",
                  }}
                >
                  {props.posts.map((obj, i) => {
                    return (
                      <GroupPost
                        postText={obj.postText}
                        authorUsername={obj.authorUsername}
                        dateAndTimeCreated={obj.dateAndTimeCreated}
                        title={obj.title}
                        imgLink={obj.imgLink}
                        comments={props.comments}
                      >
                        <UserAvatar
                          avatarUrl={obj.avatarLink}
                          avatarLink={PROFILE}
                          width="50px"
                          height="60px"
                          classNames="shadow-1-strong me-3"
                        />
                      </GroupPost>
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

export default function ModalGroupDetail(props: ModalGroupDetailProps) {
  return (
    <Column smallSize={sizeEnum.twelve} classNames={["my-1"]}>
      <div className="row">
        <img
          src={props.imageLink}
          className="card-img-top"
          alt="..."
          width="100%"
          height="400px"
        />
        <h4>{props.children}</h4>
        <h5>{props.groupDescription}</h5>

        {renderGroupPosts(props)}
      </div>
    </Column>
  );
}
