import React from "react";
import { Grid, Header, Icon, Segment } from "semantic-ui-react";

const Entry = () => (
  <Segment>
    <Grid columns={2}>
      <Grid.Column width={12}>
        <Header as="h4">
          Example Title
          <Header.Subheader>12/25/19</Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column width={4}>
        <Header as="h6" color="grey" textAlign="right">
          <Icon fitted name="edit" />
        </Header>
      </Grid.Column>
    </Grid>
  </Segment>
);

export default Entry;
