import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Settings from "../pages/settings/Settings";
import Journal from "../pages/journal/Journal";
import Post from "../pages/post/Post";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/settings" component={Settings} />
    <Route path="/journal" component={Journal} />
    <Route path="/post" component={Post} />
  </Switch>
);

export default Routes;
