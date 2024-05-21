import React, { ReactNode } from "react";
import Column from "./Column";
import sizeEnum from "./SizeEnum";
import Comment from "./Comment";
import UserAvatar from "./UserAvatar";
import GroupPost from "./GroupPost";

type ModalGroupDetailProps = {
  children: ReactNode;
  imageLink: string;
  posts: Array<any>;
  groupDescription: string;
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
                <p className="fw-light mb-4 pb-2">
                  Latest posts section by users
                </p>
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
                      >
                        <UserAvatar
                          avatarUrl={obj.avatarLink}
                          width="45px"
                          height="100%"
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
        {/* <Column smallSize={sizeEnum.six} classNames={["my-1"]}> */}
        <img
          src={props.imageLink}
          className="card-img-top"
          alt="..."
          width="100%"
          height="400px"
        />
        <h4>{props.children}</h4>
        <h5>{props.groupDescription}</h5>
        {/* </Column> */}

        {/* <Column smallSize={sizeEnum.six} classNames={["my-1"]}>
        </Column> */}
        {renderGroupPosts(props)}
      </div>
    </Column>
  );
}
