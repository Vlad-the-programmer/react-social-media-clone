import React from "react";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "../constants/routes";
import Spinner from "./Spinner";

type SuccessRedirectPage = { message: string };
export default function SuccessRedirectPage({ message }: SuccessRedirectPage) {
  const styles: { [key: string]: React.CSSProperties } = {
    heading1: {
      color: "#88B04B",
      fontFamily: "Nunito Sans",
      fontWeight: 900,
      fontSize: "40px",
      marginBottom: "10px",
    },
    mainDiv: {
      textAlign: "center",
      padding: "40px 0",
      background: "#EBF0F5",
    },
    card: {
      background: "white",
      padding: "60px",
      borderRadius: "4px",
      boxShadow: "0 2px 3px #C8D0D8",
      display: "inline-block",
      margin: "0 auto",
    },
    checkmarkDiv: {
      borderRadius: "200px",
      height: "200px",
      width: "200px",
      background: "#F8FAF5",
      margin: "0 auto",
    },
    i: {
      color: "#9ABC66",
      fontSize: "100px",
      lineHeight: "200px",
      marginLeft: "-15px",
    },
    p: {
      color: "#404F5E",
      fontFamily: "Nunito Sans",
      fontSize: "20px",
      margin: "0",
    },
  };
  const navigate = useNavigate();
  const redirectToHomePage = () => {
    setTimeout(() => {
      navigate(HOME_URL);
    }, 2000);
    return <Spinner />;
  };
  return (
    <div style={styles.mainDiv}>
      <div className="card" style={styles.card}>
        <div id="checkmarkDiv" style={styles.checkmarkDiv}>
          <i className="checkmark" style={styles.i}>
            ✓
          </i>
        </div>
        <h1 style={styles.heading1}>Success</h1>
        <p style={styles.p}>{message}</p>
      </div>
      {redirectToHomePage()}
    </div>
  );
}
