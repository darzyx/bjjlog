import React from "react";

import Journal from "./journal/Journal";
import Notifications from "./notifications/Notifications";

const Home = () => (
  <div>
    <Notifications />
    <Journal />
  </div>
);

export default Home;
