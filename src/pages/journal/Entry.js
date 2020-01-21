import React from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Label,
  Segment
} from "semantic-ui-react";

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
    <Divider hidden />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <Divider horizontal>
      <div>
        <Button circular icon="arrow down" />
      </div>
    </Divider>
    <Divider hidden />
    <Label.Group>
      <Label>Lorem</Label>
      <Label>Ipsum</Label>
      <Label>Dolor</Label>
      <Label>Sit</Label>
      <Label>Amet</Label>
      <Label>Consectetur</Label>
      <Label>Adipiscing</Label>
      <Label>Elit</Label>
      <Label>Sed</Label>
      <Label>Do</Label>
      <Label>Eiusmod</Label>
    </Label.Group>
  </Segment>
);

export default Entry;
