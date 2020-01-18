import React from "react";
import { Icon, Menu } from "semantic-ui-react";

const NavLeft = () => (
  <>
    <Menu.Item header>BJJLog</Menu.Item>
  </>
);

const NavRight = () => (
  <Menu.Menu position="right">
    <Menu.Item>
      <Icon name="bars" fitted size="large" />
    </Menu.Item>
  </Menu.Menu>
);

const Navbar = () => (
  <Menu secondary>
    <NavLeft />
    <NavRight />
  </Menu>
);

export default Navbar;
