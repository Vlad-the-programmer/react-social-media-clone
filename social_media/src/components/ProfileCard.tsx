import React, { ReactNode, useState } from "react";
import Column from "./Column";
import sizeEnum from "./SizeEnum";
import { PROFILE } from "../constants/routes";
import UserAvatar from "./UserAvatar";

type ProfileCardProps = {
  children: ReactNode;
  buttonLink: string;
  imageLink: string;
  title: string;
  columnSize: sizeEnum;
  buttonNames: Array<string>;
};

export default function ProfileCard(props: ProfileCardProps) {
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
    <Column smallSize={props.columnSize} classNames={["my-2 py-1"]}>
      <div className="card align-items-center">
        <a href={PROFILE}>
          <UserAvatar
            avatarUrl={props.imageLink}
            avatarLink={PROFILE}
            width="190px"
            height="160px"
            classNames="rounded-pill"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          {props.children}
          <hr />
          <div className="ms-4">
            <a
              onClick={changeButtonBackground}
              className={`btn ${buttonBackground} ms-5`}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </Column>
  );
}
