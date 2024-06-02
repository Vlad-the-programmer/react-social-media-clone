import React from "react";
import Icon from "./Icon";
import {
  BOOKMARKS,
  CHAT,
  CREATE_POST,
  FEEDS,
  FRIENDS,
  GROUPS,
  HOME_URL,
  PEOPLE,
  PROFILE_ADMIN,
} from "../constants/routes";
import { Link } from "react-router-dom";
import LinkWithIcon from "./LinkWithIcon";

type SideBarProps = {
  home_url: string;
};

function SideBar(props: SideBarProps) {
  return (
    <div className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark sidebar-height">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            id="profileButton"
            to={PROFILE_ADMIN}
            className="nav-link"
            aria-current="page"
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
            classNames="text-white"
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
            classNames="text-white"
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
            classNames="text-white"
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
            classNames="text-white"
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
            classNames="text-white"
            text="Bookmarks"
          >
            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
            <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
          </LinkWithIcon>
        </li>
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <LinkWithIcon
              id="homeButton"
              link={HOME_URL}
              iconClassName="bi bi-house-door"
              classNames="text-white"
              text="Home"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
            </LinkWithIcon>
          </li>
          <li>
            <LinkWithIcon
              id="searchButton"
              link={HOME_URL}
              iconClassName="bi bi-search"
              classNames="text-white"
              text="Search"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </LinkWithIcon>
          </li>
          <li>
            <a href={FEEDS} className="nav-link text-white">
              <span className="icon me-2">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Explore" className="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24">
                  <polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px"></polygon>
                  <polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon>
                  <circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px"></circle>
                </svg>
              </span>
              Explore
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <span className="icon me-2">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Reels" className="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24">
                  <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-width="2px" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line>
                  <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line>
                  <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line>
                  <path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px"></path>
                  <path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fill-rule="evenodd"></path>
                </svg>
              </span>
              Reels
            </a>
          </li>
          <li>
            <a href={CHAT} className="nav-link text-white">
              <span className="icon me-2">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Messenger" className="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24">
                  <path d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="1.739px"></path>
                  <path d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z" fill-rule="evenodd"></path>
                </svg>
              </span>
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <span className="icon me-2">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Notifications" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24">
                  <title>Notifications</title>
                  <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                </svg>
              </span>
              Notifications
            </a>
          </li>
          <li>
            <a href={CREATE_POST} className="nav-link text-white">
              <span className="icon me-2">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="New post" className="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24">
                  <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px"></path>
                  <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
                  <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
                </svg>
              </span>
              Create
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default SideBar;
