import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonToolbar, Form, Text } from "rsuite";
import { setUser } from "../services/appSlice";
import { AppDispatch, RootState } from "../services/store";

const RegistrationForm1: React.FC = () => {
  const user = useSelector((state: RootState) => state.app.user);

  const dispatch: AppDispatch = useDispatch();

  const handleUsernameChange = (input: string) => {
    dispatch(setUser({ ...user, username: input }));
  };

  const handlePasswordChange = (input: string) => {
    dispatch(setUser({ ...user, password: input }));
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="name">
          <Form.ControlLabel>Username</Form.ControlLabel>
          <Form.Control
            name="name"
            value={user.username}
            onChange={handleUsernameChange}
          />
          <Form.HelpText>Username is required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control name="email" type="email" />
          <Form.HelpText tooltip>Email is required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control
            name="password"
            type="password"
            autoComplete="off"
            value={user.password}
            onChange={handlePasswordChange}
          />
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
