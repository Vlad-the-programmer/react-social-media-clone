import React, { ReactNode, useState } from "react";
import Column from "./Column";
import sizeEnum from "./SizeEnum";
import ModalLink from "./ModalLink";
import Modal from "./Modal";
import ModalPostDetail from "./ModalPostDetail";

type CardProps = {
  children: ReactNode;
  buttonLink: string;
  imageLink: string;
  title: string;
  columnSize: sizeEnum;
  buttonNames: Array<string>;
};

function Card(props: CardProps) {
  function changeButtonBackground() {
    if (buttonBackground === "btn-primary") {
      setButtonBackground("btn-success");
      setButtonText(props.buttonNames[1]);
    } else {
      setButtonBackground("btn-primary");
      setButtonText(props.buttonNames[0]);
    }
  }

  const [buttonBackground, setButtonBackground] = useState("btn-primary");
  const [buttonText, setButtonText] = useState(props.buttonNames[0]);
  console.log(buttonText);
  return (
    <Column smallSize={props.columnSize} classNames={["my-2"]}>
      <div className="card">
        <img src={props.imageLink} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          {props.children}
          <hr />
          <div className="ms-4">
            {/* <a
              // href={props.buttonLink}
              onClick={changeButtonBackground}
              className={`btn ${buttonBackground} ms-5`}
            >
              {buttonText}
            </a> */}
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
              {buttonText}
            </ModalLink>
          </div>
        </div>
      </div>
    </Column>
  );
}
export default Card;
