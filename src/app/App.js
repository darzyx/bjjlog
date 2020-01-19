import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Routes from "./Routes";
import Navbar from "./Navbar";

const App = () => (
  <div>
    <Router>
      <div>
        <Container>
          <Routes />
        </Container>
        <Navbar />
      </div>
    </Router>
  </div>
);

export default App;
