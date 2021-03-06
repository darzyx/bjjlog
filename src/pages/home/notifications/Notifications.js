import React from "react";
import { Link } from "react-router-dom";
import { Card, Grid, Icon } from "semantic-ui-react";

const Notifications = () => (
  <Card centered fluid>
    <Card.Content>
      <Grid columns={2}>
        <Grid.Column width={8}>
          <Card.Meta textAlign="left">1/5</Card.Meta>
        </Grid.Column>
        <Grid.Column width={8}>
          <Card.Meta textAlign="right">
            <Icon fitted name="close" />
          </Card.Meta>
        </Grid.Column>
      </Grid>
      <br />
      <Card.Header
        as="h4"
        style={{ fontSize: "1.07142857rem", marginTop: "0" }}
      >
        Welcome to BJJLog!
      </Card.Header>
      <Card.Description>
        <Link to="/introduction">Let's get started! Take a quick tour →</Link>
      </Card.Description>
    </Card.Content>
  </Card>
);

export default Notifications;
