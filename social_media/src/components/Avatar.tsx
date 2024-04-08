import React from "react";
import DropDown from "./DropDown";

type AvatarProps = {
  avatarLink: string;
  imgLink: string;
  altText: string;
  imgHeight: string;
};

function Avatar(props: AvatarProps) {
  return (
    <div className="collapse navbar-collapse px-3" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            data-mdb-dropdown-init
            href={props.avatarLink}
            id="navbarDropdownMenuAvatar"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={props.imgLink}
              className="rounded-circle"
              height={props.imgHeight}
              alt={props.altText}
              loading="lazy"
            />
          </a>
          <DropDown dropItemNames={["Profile", "User"]} links={["/", "/"]}>
            DropDown
          </DropDown>
        </li>
      </ul>
    </div>
  );
}

export default Avatar;
