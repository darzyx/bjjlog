import React from "react";

import Stats from "./stats/Stats";
import Notifications from "./notifications/Notifications";
import Techniques from "./techniques/Techniques";
import Journal from "./journal/Journal";

const Home = () => (
  <div>
    <Stats />
    <Notifications />
    <Techniques />
    <Journal />
  </div>
);

export default Home;
