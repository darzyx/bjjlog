import React from "react";
import {
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic
} from "semantic-ui-react";

import radarImg from "./img/radar.png";
import pieImg from "./img/pie.png";

const Profile = () => (
  <>
    <Header as="h2">Profile</Header>
    <Segment basic>
      <center>
        <Statistic size="huge">
          <Statistic.Value>
            <Icon name="user" />
          </Statistic.Value>
        </Statistic>
      </center>
      <Divider hidden />
      <Grid columns={2}>
        <Grid.Row style={{ padding: "5px 0" }}>
          <Grid.Column width={4}>
            <Header as="h5">Rank</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as="h5" color="grey" textAlign="right">
              White Belt (III)
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ padding: "5px 0" }}>
          <Grid.Column width={4}>
            <Header as="h5">Hours</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as="h5" color="grey" textAlign="right">
              1000000
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ padding: "5px 0" }}>
          <Grid.Column width={6}>
            <Header as="h5">Breakdown</Header>
          </Grid.Column>
          <Grid.Column width={10}>
            <Header as="h5" color="grey" textAlign="right">
              45000 Gi / 80000 No Gi
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ padding: "5px 0" }}>
          <Grid.Column width={4}>
            <Header as="h5">Entries</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as="h5" color="grey" textAlign="right">
              1000000
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider hidden />
      <img alt="radar" src={radarImg} width="100%" />
      <Divider hidden />
      <img alt="pie" src={pieImg} width="100%" />
    </Segment>
  </>
);

export default Profile;
