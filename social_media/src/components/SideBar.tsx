import React, { useState, useRef } from "react";
import Icon from "./Icon";
import {
  BOOKMARKS,
  FEEDS,
  FRIENDS,
  GROUPS,
  PEOPLE,
  PROFILE_INIT,
} from "../constants/routes";
import { Link, useLocation } from "react-router-dom";
import DropDown from "./DropDown";
import LinkWithIcon from "./LinkWithIcon";
type SideBarProps = {
  home_url: string;
};

function SideBar(props: SideBarProps) {
  const { pathname } = useLocation();
  const link = useRef<HTMLAnchorElement>(null);
  console.log(pathname, pathname.replaceAll("/", ""));
  let rawPathname = pathname.replaceAll("/", "");
  const [activeNavlink, setActiveNavlink] = useState(rawPathname);
  const [isActive, setIsActive] = useState("");

  function activateLink() {
    // var button = document.getElementById("#profileButton");
    // if (pathname === GROUPS) {
    // var button = document.querySelector(`#${activeNavlink}Button`);
    // setActiveNavlink(`${rawPathname}Button`);
    // console.log(activeNavlink);
    // setIsActive("active");
    // link.current?.classList.add(isActive);
    // console.log("link ref ", link.current?.classList);
    // } else if (pathname === FRIENDS) {
    //   button = document.getElementById("#friendsButton");
    //   button?.classList.add(" active");
    // } else if (pathname === FEEDS) {
    //   button = document.getElementById("#feedsButton");
    //   button?.classList.add(" active");
    // } else if (pathname === BOOKMARKS) {
    //   button = document.getElementById("#bookmarksButton");
    //   button?.classList.add(" active");
    // } else {
    //   button?.classList.add(" active");
    // }
  }

  return (
    <div className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark sidebar-height">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            id="profileButton"
            ref={link}
            to={PROFILE_INIT}
            className="nav-link"
            aria-current="page"
            onClick={activateLink}
          >
            <Icon width="16" height="16" className="bi bi-person-circle">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </Icon>

            <span className="ms-2">Vladyslav Klymchuk</span>
          </Link>
        </li>
        <li>
          <LinkWithIcon
            id="groupsButton"
            link={GROUPS}
            iconClassName="bi bi-people-fill"
            text="Groups"
          >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
          </LinkWithIcon>
        </li>
        <li>
          <LinkWithIcon
            id="friendsButton"
            link={FRIENDS}
            iconClassName="bi bi-people"
            text="Friends"
          >
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
          </LinkWithIcon>
        </li>
        <li>
          <LinkWithIcon
            id="peopleButton"
            link={PEOPLE}
            iconClassName="bi bi-people"
            text="People"
          >
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
          </LinkWithIcon>
        </li>
        <li>
          <LinkWithIcon
            id="feedsButton"
            link={FEEDS}
            iconClassName="bi bi-rss"
            text="Feeds"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-3-8.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1" />
          </LinkWithIcon>
        </li>
        <li>
          <LinkWithIcon
            id="bookmarksButton"
            link={BOOKMARKS}
            iconClassName="bi bi-bookmarks"
            text="Bookmarks"
          >
            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
            <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
          </LinkWithIcon>
        </li>
      </ul>
      {/* <div className="flex-column align-items-end mt-6">
        <hr />
        <DropDown
          dropItemNames={[]}
          links={[]}
          classNames={
            "d-flex align-items-center text-white text-decoration-none bg-dark"
          }
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong> John W </strong>
        </DropDown>
      </div> */}
    </div>
  );
}

export default SideBar;
