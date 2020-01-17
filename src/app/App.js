import React from "react";
import { Container } from "semantic-ui-react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Routes from "../common/Routes";

const App = () => (
  <div>
    <Navbar />
    <Container>
      <Routes />
    </Container>
    <Footer />
  </div>
);

export default App;
