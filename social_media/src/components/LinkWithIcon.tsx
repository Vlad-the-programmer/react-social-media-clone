import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

type LinkWithIconProps = {
  text: string;
  id: string;
  link: string;
  children: ReactNode;
  iconClassName: string;
};

function LinkWithIcon(props: LinkWithIconProps) {
  return (
    <Link id={props.id} to={props.link} className="nav-link text-white">
      <Icon width="16" height="16" className={props.iconClassName}>
        {props.children}
      </Icon>
      <span className="ms-2">{props.text}</span>
    </Link>
  );
}

export default LinkWithIcon;
