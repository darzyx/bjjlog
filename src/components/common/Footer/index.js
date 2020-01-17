import React from "react";
import { Icon, Menu } from "semantic-ui-react";

const FootLeft = () => (
  <>
    <Menu.Item header>BJJ Log</Menu.Item>
  </>
);

const FootRight = () => (
  <Menu.Menu position="right">
    <Menu.Item>
      <Icon name="bars" />
    </Menu.Item>
  </Menu.Menu>
);

const Footer = () => (
  <Menu>
    <FootLeft />
    <FootRight />
  </Menu>
);

export default Footer;
