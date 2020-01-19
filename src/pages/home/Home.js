import React from "react";

import Journal from "./journal/Journal";
import Notifications from "./notifications/Notifications";
import Stats from "./stats/Stats";

const Home = () => (
  <div>
    <Stats />
    <Notifications />
    <Journal />
  </div>
);

export default Home;
