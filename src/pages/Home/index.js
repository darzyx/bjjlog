import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";

const Home = () => (
  <div>
    <Grid reversed="mobile" stackable columns={2}>
      <Grid.Column width={8}>
        <Header as="h2">Journal</Header>
        <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
        <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
        <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
        <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
        <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
      </Grid.Column>
      <Grid.Column width={8}>
        <Header as="h2">Alerts</Header>
        <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
        <Header as="h2">Stats</Header>
        <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
        <Header as="h2">Calendar</Header>
        <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
      </Grid.Column>
    </Grid>
  </div>
);

export default Home;
