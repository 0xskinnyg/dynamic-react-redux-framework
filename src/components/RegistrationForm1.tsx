import React from "react";
import { Button, ButtonToolbar, Form, Input, Text } from "rsuite";

const RegistrationForm1: React.FC = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="name">
          <Form.ControlLabel>Username</Form.ControlLabel>
          <Form.Control name="name" />
          <Form.HelpText>Username is required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control name="email" type="email" />
          <Form.HelpText tooltip>Email is required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control name="password" type="password" autoComplete="off" />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary">Submit</Button>
            <Button appearance="default">Cancel</Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
      <Text>This is Registration Form Version 1</Text>
    </div>
  );
};

export default RegistrationForm1;
