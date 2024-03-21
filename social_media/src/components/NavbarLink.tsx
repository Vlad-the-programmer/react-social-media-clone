import React, { ReactNode } from "react";

type NavbarLinkProps = {
    text: string,
    link: string,
    children: ReactNode,
}

function NavbarLink(props: NavbarLinkProps) {
    return (
         <a className="nav-link" href={props.link}>{props.children}</a>
    );
}

export default NavbarLink;