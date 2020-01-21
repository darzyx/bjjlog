import React from "react";
import { Checkbox, Divider, Dropdown, Grid, Header } from "semantic-ui-react";

const defaultTypeOptions = [
  { key: "0", value: "none", text: "None" },
  { key: "1", value: "gi", text: "Gi" },
  { key: "2", value: "nogi", text: "No Gi" }
];

const Settings = () => (
  <div>
    <Header as="h2">Settings</Header>
    <Divider />
    <Grid columns={2} verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={4}>
          <Header as="h5" floated="left">
            Email
          </Header>
        </Grid.Column>
        <Grid.Column width={12}>
          <Header as="h5" floated="right">
            dario.zyx@gmail.com
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Divider style={{ margin: "0 14px" }} />
      <Grid.Row>
        <Grid.Column width={6}>
          <Header as="h5" floated="left">
            Password
          </Header>
        </Grid.Column>
        <Grid.Column width={10}>
          <Header as="h5" floated="right">
            Reset Password
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Divider style={{ margin: "0 14px" }} />
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h5" floated="left">
            Dark Theme
          </Header>
        </Grid.Column>
        <Grid.Column width={8}>
          <Header floated="right">
            <Checkbox toggle fitted />
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Divider style={{ margin: "0 14px" }} />
      <Grid.Row>
        <Grid.Column width={10}>
          <Header as="h5" floated="left">
            Default Type
          </Header>
        </Grid.Column>
        <Grid.Column width={6}>
          <Dropdown
            defaultValue={defaultTypeOptions[0].value}
            fluid
            options={defaultTypeOptions}
            selection
          />
        </Grid.Column>
      </Grid.Row>
      <Divider style={{ margin: "0 14px" }} />
    </Grid>
  </div>
);

export default Settings;
