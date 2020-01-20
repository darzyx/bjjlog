import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Post from "../pages/post/Post";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/post" component={Post} />
  </Switch>
);

export default Routes;
