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
          <DropDown dropItemNames={["Profile", "User"]} links={["/", "/"]} />
        </li>
      </ul>
    </div>

    // <div className="dropdown show">
    //   <a
    //     className="btn btn-secondary dropdown-toggle"
    //     href="#"
    //     role="button"
    //     id="dropdownMenuLink"
    //     data-bs-toggle="dropdown"
    //     aria-haspopup="true"
    //     aria-expanded="false"
    //   >
    //     Dropdown link
    //   </a>

    //   <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    //     <a className="dropdown-item" href="#">
    //       Action
    //     </a>
    //     <a className="dropdown-item" href="#">
    //       Another action
    //     </a>
    //     <a className="dropdown-item" href="#">
    //       Something else here
    //     </a>
    //   </div>
    // </div>
  );
}

export default Avatar;
