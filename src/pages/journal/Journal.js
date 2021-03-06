import React from "react";
import { Header } from "semantic-ui-react";

import Entry from "./Entry";

const Journal = () => (
  <>
    <Header as="h2">Journal</Header>
    <Entry />
    <Entry />
    <Entry />
    <Entry />
    <Entry />
  </>
);

export default Journal;
