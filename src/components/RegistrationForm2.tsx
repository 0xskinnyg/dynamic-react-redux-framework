import React from "react";
import { Form, ButtonToolbar, Button, Text } from "rsuite";

const RegistrationForm2: React.FC = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="name">
          <Form.ControlLabel>Username</Form.ControlLabel>
          <Form.Control name="name" />
          <Form.HelpText>Username is required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.ControlLabel>Phone</Form.ControlLabel>
          <Form.Control name="Phone" type="Phone" />
          <Form.HelpText tooltip>Phone is required</Form.HelpText>
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
      <Text>This is Registration Form Version 2</Text>
    </div>
  );
};

export default RegistrationForm2;
