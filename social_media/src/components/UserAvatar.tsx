import React from "react";
import { Link } from "react-router-dom";
import { PROFILE } from "../constants/routes";

type UserAvatarProps = {
  avatarUrl: string;
  width: string;
  height: string;
  avatarLink: string;
  classNames: string;
};

export default function UserAvatar(props: UserAvatarProps) {
  return (
    <Link
      to={props.avatarLink}
      onClick={() => {
        document.getElementById("modalTriggerBtn")?.click();
      }}
    >
      <img
        src={props.avatarUrl}
        alt="avatar 1"
        className={"rounded-circle " + props.classNames}
        width={props.width}
        height={props.height}
      />
    </Link>
  );
}
