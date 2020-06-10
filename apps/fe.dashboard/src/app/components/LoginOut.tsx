import React from "react";
import { Link } from "react-router-dom";

const LogInOut = (props) => {
  const isLoggedIn = localStorage.getItem("access_token") !== null;
  const message = isLoggedIn ? "sign out" : "sign in";
  const path = isLoggedIn ? "/logout" : "/login";

  const onClickHandler = () => {
    localStorage.clear();
    window.location.href = props.uri + path;
  };

  return (
    <>
      <button onClick={onClickHandler}>{message}</button>
      {!isLoggedIn && <Link to="/register">Register</Link>}
    </>
  );
};

export default LogInOut;
