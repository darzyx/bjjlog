import React from "react";
import { Grid } from "semantic-ui-react";

import Journal from "./journal/Journal";
import Notifications from "./notifications/Notifications";
import Calendar from "./calendar/Calendar";
import Stats from "./stats/Stats";

const Home = () => (
  <div>
    <Grid reversed="mobile" stackable columns={2}>
      <Grid.Column width={8}>
        <Journal />
      </Grid.Column>
      <Grid.Column width={8}>
        <Notifications />
        <Calendar />
        <Stats />
      </Grid.Column>
    </Grid>
  </div>
);

export default Home;
