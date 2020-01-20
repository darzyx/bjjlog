import React from "react";
import { Header, Form } from "semantic-ui-react";

const Post = () => (
  <div>
    <Header as="h2">Post</Header>
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </Form.Field>
      <Form.Field>
        <Form.Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Form.Button fluid type="submit">
        Submit
      </Form.Button>
    </Form>
  </div>
);

export default Post;
