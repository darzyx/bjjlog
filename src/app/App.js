import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Divider } from "semantic-ui-react";

import Routes from "./Routes";
import Navbar from "./Navbar";

const App = () => (
  <div>
    <Router>
      <div>
        <Container>
          <Routes />
        </Container>
        <Divider hidden section />
        <Navbar />
      </div>
    </Router>
  </div>
);

export default App;
