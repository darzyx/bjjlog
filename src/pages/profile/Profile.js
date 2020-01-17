import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";

const Profile = () => (
  <div>
    <Grid reversed="mobile" stackable columns={2}>
      <Grid.Column width={9}>
        <Header as="h2">Profile Picture</Header>
        <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
      </Grid.Column>
      <Grid.Column width={7}>
        <Header as="h2">Ranking / Stats</Header>
        <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
      </Grid.Column>
    </Grid>
  </div>
);

export default Profile;
