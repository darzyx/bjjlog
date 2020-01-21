import React from "react";

import Notifications from "./notifications/Notifications";
import Techniques from "./techniques/Techniques";
import Journal from "./journal/Journal";

const Home = () => (
  <div>
    <Notifications />
    <Techniques />
    <Journal />
  </div>
);

export default Home;
