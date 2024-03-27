import React from "react";

type AvatarProps = {
  avatarLink: string;
  imgLink: string;
  altText: string;
  imgHeight: string;
};

function Avatar(props: AvatarProps) {
  return (
    <a
      data-mdb-dropdown-init
      className="dropdown-toggle d-flex align-items-center hidden-arrow"
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
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </a>
  );
}

export default Avatar;
