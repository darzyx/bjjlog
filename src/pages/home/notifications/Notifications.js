import React from "react";
import { Grid, Header, Icon, Segment } from "semantic-ui-react";

const Notifications = () => (
  <>
    <Header as="h2">Notifications</Header>
    <Segment>
      <Grid columns={2}>
        <Grid.Column width={12}>
          <Header as="h6" color="grey" textAlign="left">
            <Icon circular fitted link name="chevron left" />
            <Icon circular fitted link name="chevron right" />
          </Header>
        </Grid.Column>
        <Grid.Column width={4}>
          <Header as="h6" color="grey" textAlign="right">
            <Icon fitted name="close" />
          </Header>
        </Grid.Column>
      </Grid>
      <p style={{ margin: "15px 0" }}>
        Welcome to BJJLog! Are you in for a quick tour? Click here to get things
        started.{" "}
        <span aria-label="sparkles" role="img">
          ✨
        </span>
      </p>
    </Segment>
  </>
);

export default Notifications;
