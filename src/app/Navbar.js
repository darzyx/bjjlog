import React from "react";
import { Icon, Menu } from "semantic-ui-react";

const Navbar = () => (
  <div style={{ position: "fixed", bottom: "0", left: "0", width: "100%" }}>
    <Menu borderless fluid icon widths={4}>
      <Menu.Item onClick={() => console.log("Click!")}>
        <Icon color="grey" name="home" fitted size="large" />
      </Menu.Item>
      <Menu.Item onClick={() => console.log("Click!")}>
        <Icon color="grey" name="pie chart" fitted size="large" />
      </Menu.Item>
      <Menu.Item onClick={() => console.log("Click!")}>
        <Icon color="grey" name="write" fitted size="large" />
      </Menu.Item>
      <Menu.Item onClick={() => console.log("Click!")}>
        <Icon color="grey" name="options" fitted size="large" />
      </Menu.Item>
    </Menu>
  </div>
);

export default Navbar;
