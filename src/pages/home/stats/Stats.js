import React from "react";
import { Grid, Header, Icon, Segment, Statistic } from "semantic-ui-react";

const Stats = () => (
  <>
    <Header as="h3">
      <Icon name="chart line" />
      Stats
    </Header>
    <Segment>
      <Grid columns={2}>
        <Grid.Column width={8}>
          <center>
            <Statistic>
              <Statistic.Value>143</Statistic.Value>
              <Statistic.Label>Hours</Statistic.Label>
            </Statistic>
          </center>
        </Grid.Column>
        <Grid.Column width={8}>
          <center>
            <Statistic>
              <Statistic.Value>
                <Icon name="chart pie" />
              </Statistic.Value>
              <Statistic.Label>Ratio</Statistic.Label>
            </Statistic>
          </center>
        </Grid.Column>
      </Grid>
    </Segment>
  </>
);

export default Stats;
