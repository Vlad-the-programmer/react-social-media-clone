import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { LOGIN } from "../constants/routes";
import { userExists, usernameExists } from "../utils/signUp";
import { data } from "../utils/signUp";
import { users, setUsers } from "../utils/users";
import Toast from "./Toast";
import Icon from "./Icon.tsx";
import useToast from "../utils/useToast";

function SignUp() {
  //   const history = useHistory();
  const [usersData, setUserData] = useState(() => {
    return users.length > 0 ? users : data;
  });

  const { showToast } = useToast();

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (!usernameExists(username)) {
      if (!userExists(emailAddress)) {
        setUserData((previousUsersData) => [
          ...previousUsersData,
          {
            fullName: fullName,
            username: username,
            email: emailAddress,
            password: password,
          },
        ]);
        // return (
        //   <Toast title="SignUp" message="Signup successful!">
        //     <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
        //     <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
        //   </Toast>
        // );
        // history.push(ROUTES.DASHBOARD);
      } else {
        setFullName("");
        setEmailAddress("");
        setPassword("");
        setError("User Exists!");
      }
    } else {
      setUsername("");
      setError("That username is already taken, please try another.");
    }
  };

  useEffect(() => {
    document.title = "Sign Up - Instagram";
    setUsers(usersData, true);
  }, [usersData]);

  return (
    <div className="container flex mx-auto h-screen">
      <Toast title="SignUp" message="Signup successful!">
        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
      </Toast>
      <div className="d-flex flex-row align-items-center gx-6">
        <div className="d-flex  flex-column mx-5">
          <img
            src={process.env.PUBLIC_URL + "../media/signup.png"}
            alt="Instagram"
          />
        </div>
        <div className="flex flex-column col-sm-3 mx-5">
          <div className="d-flex flex-column flex-direction-column align-items-center bg-white p-4 border border-gray-primary mb-4 rounded">
            <h1 className="flex justify-content-center">
              <Icon width="32" height="32" class="bi bi-instagram">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </Icon>
            </h1>

            {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

            <form onSubmit={handleSignUp} method="POST">
              <input
                aria-label="Enter your username"
                type="text"
                placeholder="Username"
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={({ target }) => setUsername(target.value)}
                value={username}
              />
              <input
                aria-label="Enter your full name"
                type="text"
                placeholder="Full name"
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={({ target }) => setFullName(target.value)}
                value={fullName}
              />
              <input
                aria-label="Enter your email address"
                type="text"
                placeholder="Email address"
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={({ target }) => setEmailAddress(target.value)}
                value={emailAddress}
              />
              <input
                aria-label="Enter your password"
                type="password"
                placeholder="Password"
                className="text-sm text-gray-base  mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={({ target }) => setPassword(target.value)}
                value={password}
              />
              <hr />
              <button
                disabled={isInvalid}
                type="submit"
                className={`bg-success text-white rounded h-8 font-bold px-3 ms-5
            ${isInvalid && "opacity-50"}`}
                onClick={showToast}
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="flex justify-content-center align-items-center flex-column w-full bg-white p-4 rounded border border-gray-primary">
            <p className="text-sm">
              Have an account?{` `}
              <Link to={LOGIN} className="font-bold text-blue-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
