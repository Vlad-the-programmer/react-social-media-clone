import React from "react";

type UserAvatarProps = {
  avatarUrl: string;
  width: string;
  height: string;
  classNames: string;
};

export default function UserAvatar(props: UserAvatarProps) {
  return (
    <img
      src={props.avatarUrl}
      alt="avatar 1"
      className={"rounded-circle " + props.classNames}
      width={props.width}
      height={props.height}
    />
  );
}
