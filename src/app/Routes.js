import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/profile" component={Profile} />
  </Switch>
);

export default Routes;
