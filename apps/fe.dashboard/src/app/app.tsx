import React, { useState, useEffect } from "react";
import Greedings from "./components/Greeding";
import LogInOut from "./components/LogInOut";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { config } from "@krab/config";

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (loggedIn !== (localStorage.getItem("access_token") !== null)) {
      setLoggedIn(localStorage.getItem("access_token") !== null);
    }
  });
  console.log("Logged in: ", loggedIn);
  return (
    <Router>
      <Greedings loggedIn={loggedIn} />
      <LogInOut uri={`http://localhost:${config.serverPort}`} />
      <Routes />
    </Router>
  );
};

export default App;
