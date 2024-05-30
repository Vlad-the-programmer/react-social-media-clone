import React from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "../constants/routes";

export default function SignOut() {
  return (
    <>
      <div className="d-flex align-items-center text-center p-3 py-5 mx-5 px-5">
        You have been signout.
        <Link to={LOGIN}>Login</Link>
      </div>
    </>
  );
}
