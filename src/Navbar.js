import React from "react";
import { Icon, Menu } from "semantic-ui-react";

const NavLeft = () => (
  <>
    <Menu.Item header>BJJ Log</Menu.Item>
  </>
);

const NavRight = () => (
  <Menu.Menu position="right">
    <Menu.Item>
      <Icon name="bars" />
    </Menu.Item>
  </Menu.Menu>
);

const Navbar = () => (
  <Menu>
    <NavLeft />
    <NavRight />
  </Menu>
);

export default Navbar;
