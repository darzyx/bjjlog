import React from "react";
import { Link } from "react-router-dom";
import { Header, Label } from "semantic-ui-react";

const Techniques = () => (
  <>
    <Header as="h2">Techniques</Header>
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
  </>
);

export default Techniques;
