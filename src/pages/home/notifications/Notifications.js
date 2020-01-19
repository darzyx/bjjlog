import React from "react";
import { Grid, Header, Icon, Segment } from "semantic-ui-react";

const Notifications = () => (
  <Segment>
    <Grid columns={2}>
      <Grid.Column width={12}>
        <Header as="h4">
          <Header.Subheader>1/5</Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column width={4}>
        <Header as="h4" textAlign="right">
          <Header.Subheader>
            <Icon fitted name="close" />
          </Header.Subheader>
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
);

export default Notifications;
