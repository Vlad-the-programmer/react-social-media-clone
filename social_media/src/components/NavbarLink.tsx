import React, { ReactNode } from "react";

type NavbarLinkProps = {
  text: string;
  link: string;
  children: ReactNode;
};

function NavbarLink(props: NavbarLinkProps) {
  return (
    <a className="nav-link px-2" href={props.link}>
      {props.children}
    </a>
    // <Link to={props.link}>{props.children}</Link>
  );
}

export default NavbarLink;
