import React from "react";
import { Divider, Grid, Header, Icon, Segment } from "semantic-ui-react";

const Entry = () => (
  <Segment>
    <Grid columns={2}>
      <Grid.Column width={12}>
        <Header as="h4" textAlign="left">
          Example Journal Entry Title
        </Header>
      </Grid.Column>
      <Grid.Column width={4}>
        <Header as="h6" color="grey" textAlign="right">
          <Icon fitted name="edit" />
        </Header>
      </Grid.Column>
    </Grid>
    <Divider hidden />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <Header as="h6" color="grey" textAlign="left">
      12/25/19
    </Header>
  </Segment>
);

export default Entry;
