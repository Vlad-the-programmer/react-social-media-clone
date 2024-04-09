import React from "react";
import Icon from "./Icon";
import DropDown from "./DropDown";
import Avatar from "./Avatar";
import DropDownItem from "./DropDownItem";

type SideBarProps = {
  home_url: string;
};

function SideBar(props: SideBarProps) {
  return (
    <div className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark sidebar-height">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">
          <Icon width="32" height="32" className="bi bi-facebook">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </Icon>
        </span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            <Icon width="16" height="16" className="bi bi-person-circle">

              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </Icon>

            <span className="ms-2">Vladyslav Klymchuk</span>
          </a>
        </li>
        <li>
          <a href="/" className="nav-link text-white">
            <Icon
              width="16"
              height="16"
              className="bi bi-people-fill">

              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />

            </Icon>
            <span className="ms-2">Groups</span>
          </a>
        </li>
        <li>
          <a href="/" className="nav-link text-white">
            <i className="fa fa-first-order"></i>
            <span className="ms-2">Friends</span>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <i className="fa fa-cog"></i>
            <span className="ms-2">Settings</span>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            <i className="fa fa-bookmark"></i>
            <span className="ms-2">Bookmarks</span>
          </a>
        </li>
      </ul>
      <hr />
      {/* <DropDown dropItemNames={[]} links={[]}>
        <img
          src="https://github.com/mdo.png"
          alt=""
          width="32"
          height="32"
          className="rounded-circle me-2"
        />
        <strong> John W </strong>
      </DropDown> */}
    </div>
  );
}

export default SideBar;
