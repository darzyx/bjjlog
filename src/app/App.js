import React from "react";
import { Container, Divider } from "semantic-ui-react";

import Navbar from "./Navbar";
import Routes from "../common/Routes";

const App = () => (
  <div>
    <Navbar />
    <Divider hidden />
    <Container>
      <Routes />
    </Container>
  </div>
);

export default App;
