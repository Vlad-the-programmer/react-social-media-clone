import React from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "../constants/routes";

export default function SignOut() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center text-center">

        <form method="POST" action="">
          <legend>Log out</legend>
          <p>Are you sure you want to log out? </p>
          <Link to={LOGIN} className="btn btn-danger">Logout</Link>
        </form>
      </div>
    </div>
  );
}
