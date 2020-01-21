import React from "react";
import { Link } from "react-router-dom";
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
      <Label as={Link} to="/">
        Lorem
      </Label>
      <Label as={Link} to="/">
        Ipsum
      </Label>
      <Label as={Link} to="/">
        Dolor
      </Label>
      <Label as={Link} to="/">
        Sit
      </Label>
      <Label as={Link} to="/">
        Amet
      </Label>
      <Label as={Link} to="/">
        Consectetur
      </Label>
      <Label as={Link} to="/">
        Adipiscing
      </Label>
      <Label as={Link} to="/">
        Elit
      </Label>
      <Label as={Link} to="/">
        Sed
      </Label>
      <Label as={Link} to="/">
        Do
      </Label>
      <Label as={Link} to="/">
        Eiusmod
      </Label>
    </Label.Group>
  </Segment>
);

export default Entry;
