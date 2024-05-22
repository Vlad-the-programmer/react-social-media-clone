import React, { ReactNode } from "react";
import DropDown from "./DropDown";
import DropDownItem from "./DropDownItem";
import UserAvatar from "./UserAvatar";
import { PROFILE } from "../constants/routes";

type AvatarProps = {
  avatarLink: string;
  imgLink: string;
  altText: string;
  imgHeight: string;
  imgWidth: string;
  dropDownItems: Array<any>;
  dropDownHeader: ReactNode;
  dropDownStyles: Object;
};

function Avatar(props: AvatarProps) {
  return (
    <>
      <DropDown
        dropItems={props.dropDownItems}
        dropDownStyles={props.dropDownStyles}
        header={props.dropDownHeader}
        classNames={""}
      >
        <UserAvatar
          avatarUrl={props.imgLink}
          avatarLink={PROFILE}
          width={props.imgWidth}
          height={props.imgHeight}
          classNames=""
        />
      </DropDown>
    </>
  );
}

export default Avatar;
