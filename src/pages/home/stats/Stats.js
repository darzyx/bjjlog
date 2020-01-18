import React from "react";
import { Header, Icon, Segment, Statistic } from "semantic-ui-react";

const Stats = () => (
  <>
    <Header as="h3">
      <Icon name="chart line" />
      Stats
    </Header>
    <Segment>
      <center>
        <Statistic>
          <Statistic.Value>217</Statistic.Value>
          <Statistic.Label>Hours</Statistic.Label>
        </Statistic>
      </center>
    </Segment>
  </>
);

export default Stats;
