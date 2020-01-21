import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

const Navbar = () => (
  <div style={{ position: "fixed", bottom: "0", left: "0", width: "100%" }}>
    <Menu
      borderless
      fluid
      icon
      widths={3}
      style={{ border: "none", borderRadius: "0" }}
    >
      <Menu.Item
        as={Link}
        onClick={() => console.log("Click!")}
        style={{ borderRadius: "0" }}
        to="/"
      >
        <Icon color="grey" name="home" fitted size="large" />
      </Menu.Item>
      <Menu.Item
        as={Link}
        onClick={() => console.log("Click!")}
        style={{ borderRadius: "0" }}
        to="/profile"
      >
        <Icon color="grey" name="user circle" fitted size="large" />
      </Menu.Item>
      <Menu.Item
        as={Link}
        onClick={() => console.log("Click!")}
        style={{ borderRadius: "0" }}
        to="/post"
      >
        <Icon color="grey" name="write" fitted size="large" />
      </Menu.Item>
    </Menu>
  </div>
);

export default Navbar;
