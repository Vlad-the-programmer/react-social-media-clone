import React from "react";
import Container from "./Container";

type SideBarProps = {
  home_url: string;
};

function SideBar(props: SideBarProps) {
  return (
    <div className="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark sidebar-height"> 
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"> 
        <svg className="bi me-2" width="40" height="32"> </svg> 
        <span className="fs-4">CPRS Admin</span> 
      </a>
      <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item"> 
            <a href="#" className="nav-link active" aria-current="page"> 
              <i className="fa fa-home"></i>
              <span className="ms-2">Home</span> 
            </a> 
          </li>
          <li> 
            <a href="/" className="nav-link text-white"> 
              <i className="fa fa-dashboard"></i>
              <span className="ms-2">Dashboard</span> 
            </a> 
          </li>
          <li>
            <a href="/" className="nav-link text-white"> 
              <i className="fa fa-first-order"></i>
              <span className="ms-2">Students</span> 
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
          <div className="dropdown"> 
            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false"> 
              <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" /> 
              <strong> John W </strong> 
              </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
              <li><a className="dropdown-item" href="#">New project</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
      </div>
    );
}

export default SideBar;
