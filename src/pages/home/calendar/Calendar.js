import React from "react";
import { Header, Icon, Segment } from "semantic-ui-react";

const Calendar = () => (
  <>
    <Header as="h3">
      <Icon name="calendar" />
      Calendar
    </Header>
    <Segment>
      <center>
        <p>[calendar goes here]</p>
      </center>
    </Segment>
  </>
);

export default Calendar;
