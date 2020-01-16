import React from "react";
import { Container, Grid, Segment } from "semantic-ui-react";

import Navbar from "./Navbar";

const App = () => (
  <div>
    <Navbar />
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

export default App;
