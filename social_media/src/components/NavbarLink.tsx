import React, { ReactNode } from "react";

type NavbarLinkProps = {
    text: string,
    link: string,
    children: ReactNode,
}

function NavbarLink(props: NavbarLinkProps) {
    return (
        <li className="nav-item"> <a className="nav-link" href={props.link}>{props.children}</a></li>
    );
}

export default NavbarLink;