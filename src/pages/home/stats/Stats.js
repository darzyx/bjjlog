import React from "react";
import { Grid, Header, Icon, Segment, Statistic } from "semantic-ui-react";

const Stats = () => (
  <>
    <Header as="h3">Stats</Header>
    <Segment>
      <Grid columns={2}>
        <Grid.Column width={8}>
          <center>
            <Statistic>
              <Statistic.Value>143</Statistic.Value>
              <Statistic.Label>Stonks</Statistic.Label>
            </Statistic>
          </center>
        </Grid.Column>
        <Grid.Column width={8}>
          <center>
            <Statistic>
              <Statistic.Value>
                <Icon name="chart pie" />
              </Statistic.Value>
              <Statistic.Label>Only</Statistic.Label>
            </Statistic>
          </center>
        </Grid.Column>
      </Grid>
      <Grid columns={2}>
        <Grid.Column width={8}>
          <center>
            <Statistic>
              <Statistic.Value>
                <Icon name="chart line" />
              </Statistic.Value>
              <Statistic.Label>Go</Statistic.Label>
            </Statistic>
          </center>
        </Grid.Column>
        <Grid.Column width={8}>
          <center>
            <Statistic>
              <Statistic.Value>
                <Icon name="chart bar" />
              </Statistic.Value>
              <Statistic.Label>Up</Statistic.Label>
            </Statistic>
          </center>
        </Grid.Column>
      </Grid>
    </Segment>
  </>
);

export default Stats;
