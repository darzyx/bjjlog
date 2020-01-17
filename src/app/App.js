import React from "react";
import { Container } from "semantic-ui-react";

import Navbar from "./Navbar";
import Routes from "../common/Routes";

const App = () => (
  <div>
    <Navbar />
    <Container>
      <Routes />
    </Container>
  </div>
);

export default App;
