import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Navbar from "./components/common/Navbar/index.js";
import Home from "./components/pages/Home/index.js";
import Profile from "./components/pages/Profile/index.js";
import Footer from "./components/common/Footer/index.js";

const Routes = () => (
  <Router>
    <div>
      <Route path="/">
        <Navbar />
      </Route>
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Container>
      <Route path="/">
        <Footer />
      </Route>
    </div>
  </Router>
);

export default Routes;
