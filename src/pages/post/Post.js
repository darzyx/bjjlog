import React from "react";
import { Header, Label, Form } from "semantic-ui-react";

const Post = () => (
  <div>
    <Header as="h2">Post</Header>
    <Form>
      <Form.Input label="Title" placeholder="Title" />
      <Form.Group style={{ marginBottom: "1em" }} unstackable widths={2}>
        <Form.Input fluid label="Date" placeholder="Date" />
        <Form.Input fluid label="Time" placeholder="Time" />
      </Form.Group>
      <Form.Group inline>
        <label>Type</label>
        <Form.Radio label="Gi" value="gi" />
        <Form.Radio label="No Gi" value="nogi" />
      </Form.Group>
      <Form.Input label="Techniques" placeholder="Techniques" />
      <Label.Group>
        <Label>un</Label>
        <Label>deux</Label>
        <Label>trois</Label>
        <Label>quatre</Label>
        <Label>cinq</Label>
        <Label>six</Label>
        <Label>sept</Label>
      </Label.Group>
      <Form.TextArea label="Notes" placeholder="Notes" />
      <Form.Button fluid type="submit">
        Submit
      </Form.Button>
    </Form>
  </div>
);

export default Post;
