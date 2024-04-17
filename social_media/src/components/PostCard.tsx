import React, { ReactNode, useState } from "react";
import Column from "./Column";
import sizeEnum from "./SizeEnum";

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
    <Column smallSize={props.columnSize} classNames={["my-1"]}>
      <div className="card">
        <img src={props.imageLink} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          {props.children}
          <hr />
          <div className="ms-4">
            <a
              // href={props.buttonLink}
              onClick={changeButtonBackground}
              className={`btn ${buttonBackground} ms-5`}
            >
              {props.buttonName}
            </a>
          </div>
        </div>
      </div>
    </Column>
  );
}
export default PostCard;
