import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type NavbarLinkProps = {
  text: string;
  link: string;
  children: ReactNode;
};

function NavbarLink(props: NavbarLinkProps) {
  return (
    <a className="nav-link" href={props.link}>
      {props.children}
    </a>
    // <Link to={props.link}>{props.children}</Link>
  );
}

export default NavbarLink;
