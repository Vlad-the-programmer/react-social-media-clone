import React, { ReactNode, useState } from "react";
import Column from "./Column";
import sizeEnum from "./SizeEnum";
import Modal from "./Modal";
import ModalLink from "./ModalLink";
import ModalPostDetail from "./ModalPostDetail";
import { getSlicedText } from "../utils/helpFuncs";

type PostCardProps = {
  children: ReactNode;
  buttonLink: string;
  imageLink: string;
  title: string;
  columnSize: sizeEnum;
  buttonName: string;
};

function PostCard(props: PostCardProps) {
  function changeButtonBackground() {
    if (buttonBackground === "btn-primary") {
      setButtonBackground("btn-success");
    } else {
      setButtonBackground("btn-primary");
    }
  }

  const [buttonBackground, setButtonBackground] = useState("btn-primary");

  return (
    <Column smallSize={props.columnSize} classNames={["my-5"]}>
      <div className="card h-100">
        <img src={props.imageLink} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          {getSlicedText(props.children, 150)}
          <hr />
          <div className="d-flex align-items-end ms-4">
            <ModalLink
              modal={
                <Modal title={props.title} buttonName="Show All">
                  <ModalPostDetail
                    imageLink={props.imageLink}
                    comments={[
                      {
                        avatarLink:
                          "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
                        authorUsername: "Vlad k.",
                        dateAndTimeCreated: "March 24, 2021 15:20",
                        status: "Pending",
                        commentText:
                          "There are many variations of passages of Lorem Ipsum available, but the \
                        majority have suffered alteration in some form, by injected humour, or \
                        randomised words which don't look even slightly believable.",
                      },
                      {
                        avatarLink:
                          "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
                        authorUsername: "Vlad K.",
                        dateAndTimeCreated: "March 24, 2021 15:20",
                        status: "Approved",
                        commentText:
                          "There are many variations of passages of Lorem Ipsum available, but the \
                        majority have suffered alteration in some form, by injected humour, or \
                        randomised words which don't look even slightly believable.",
                      },
                      {
                        avatarLink:
                          "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
                        authorUsername: "Vlad k.",
                        dateAndTimeCreated: "March 24, 2021 15:20",
                        status: "Rejected",
                        commentText:
                          "There are many variations of passages of Lorem Ipsum available, but the \
                        majority have suffered alteration in some form, by injected humour, or \
                        randomised words which don't look even slightly believable.",
                      },
                      {
                        avatarLink:
                          "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
                        authorUsername: "Vlad k.",
                        dateAndTimeCreated: "March 24, 2021 15:20",
                        status: "Rejected",
                        commentText:
                          "There are many variations of passages of Lorem Ipsum available, but the \
                        majority have suffered alteration in some form, by injected humour, or \
                        randomised words which don't look even slightly believable.",
                      },
                      {
                        avatarLink:
                          "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
                        authorUsername: "Vlad k.",
                        dateAndTimeCreated: "March 24, 2021 15:20",
                        status: "Rejected",
                        commentText:
                          "There are many variations of passages of Lorem Ipsum available, but the \
                        majority have suffered alteration in some form, by injected humour, or \
                        randomised words which don't look even slightly believable.",
                      },
                      {
                        avatarLink:
                          "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
                        authorUsername: "Vlad k.",
                        dateAndTimeCreated: "March 24, 2021 15:20",
                        status: "Rejected",
                        commentText:
                          "There are many variations of passages of Lorem Ipsum available, but the \
                        majority have suffered alteration in some form, by injected humour, or \
                        randomised words which don't look even slightly believable.",
                      },
                    ]}
                  >
                    {props.children}
                  </ModalPostDetail>
                </Modal>
              }
              btnClassNames={`btn ${buttonBackground} ms-5`}
              onClick={changeButtonBackground}
            >
              {props.buttonName}
            </ModalLink>
          </div>
        </div>
      </div>
    </Column>
  );
}
export default PostCard;
