import React from "react";
import { Link } from "react-router-dom";
import { Checkbox, Divider, Dropdown, Grid, Header } from "semantic-ui-react";

const defaultTypeOptions = [
  { key: "0", value: "none", text: "None" },
  { key: "1", value: "gi", text: "Gi" },
  { key: "2", value: "nogi", text: "No Gi" }
];

const Account = () => (
  <div>
    <Header as="h2">Account</Header>
    <Header as="h3">Settings</Header>
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
    <Header as="h3">Info</Header>
    <Divider />
    <Grid columns={2} verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h5" floated="left">
            Account Number
          </Header>
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h5" floated="right">
            JH4289XH40
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Divider style={{ margin: "0 14px" }} />
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h5" floated="left">
            Version
          </Header>
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h5" floated="right">
            <Link to="/">0.1</Link>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Divider style={{ margin: "0 14px" }} />
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h5" floated="left">
            Disclosures
          </Header>
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h5" floated="right">
            <Link to="/">Link</Link> / <Link to="/">PDF</Link>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Divider style={{ margin: "0 14px" }} />
    </Grid>
  </div>
);

export default Account;
