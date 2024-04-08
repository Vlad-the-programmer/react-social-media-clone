import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import $ from "jquery";
// import Popper from "popper.js";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Router>
  //   <Routes>
  //     <Route path="/" exact element={<App />}>
  //       {/* <Route index element={<App />} /> */}
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/signup" element={<SignUp />} />
  //     </Route>
  //   </Routes>
  // </Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
