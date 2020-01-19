import React from "react";
import { Container } from "semantic-ui-react";

import Navbar from "./Navbar";
import Routes from "../common/Routes";

const App = () => (
  <div>
    <Container>
      <Routes />
    </Container>
    <Navbar />
  </div>
);

export default App;
