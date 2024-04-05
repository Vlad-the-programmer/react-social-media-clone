import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type RouterLinkProps = {
  linkTo: string;
  children: ReactNode;
};

function RouterLink(props: RouterLinkProps) {
  return (
    <li>
      <Link to={props.linkTo}>{props.children}</Link>
    </li>
  );
}

export default RouterLink;
