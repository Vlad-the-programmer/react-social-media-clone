import React, { ReactNode } from "react";
import DropDown from "./DropDown";
import DropDownItem from "./DropDownItem";

type AvatarProps = {
  avatarLink: string;
  imgLink: string;
  altText: string;
  imgHeight: string;
  imgWidth: string;
  children: ReactNode;
};

function Avatar(props: AvatarProps) {
  return (
    <>
      {/* // <div className="collapse navbar-collapse px-3" id="navbarResponsive">
    //   <ul className="navbar-nav ml-auto">
    //     <li className="nav-item"> */}
      {/* <a
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            // href={props.avatarLink}
            id="navbarDropdownMenuAvatar"
            role="button"
            data-bs-toggle="dropdown"
            data-bs-target="#dropdownUser1"
            aria-controls="dropdownUser1"
            aria-expanded="false"
          >
            <img
              src={props.imgLink}
              className="rounded-circle"
              height={props.imgHeight}
              width={props.imgWidth}
              alt={props.altText}
              loading="lazy"
            />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            // id="dropdownUser1"
            aria-labelledby="dropdownUser1"
          >
            {props.children}
          </ul> */}
      <DropDown
        dropItemNames={["Profile", "SignOut"]}
        links={["/", "/"]}
        classNames={""}
      >
        <img
          src={props.imgLink}
          className="rounded-circle"
          height={props.imgHeight}
          width={props.imgWidth}
          alt={props.altText}
          loading="lazy"
        />
        {/* <strong> John W </strong> */}
      </DropDown>
    </>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default Avatar;
