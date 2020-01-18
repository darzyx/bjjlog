import React from "react";
import { Header, Icon } from "semantic-ui-react";

import Entry from "./Entry";

const Journal = () => (
  <>
    <Header as="h3">
      <Icon name="book" />
      Journal
    </Header>
    <Entry />
    <Entry />
    <Entry />
    <Entry />
    <Entry />
  </>
);

export default Journal;
