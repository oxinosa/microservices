import React from "react";
import Home from "./views/home";
import Register from "./views/register";
import Callback from "./views/callback";

import { Switch, Route } from "react-router-dom";

export default () => {
  return (
    <Switch>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/callback">
        <Callback />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};
