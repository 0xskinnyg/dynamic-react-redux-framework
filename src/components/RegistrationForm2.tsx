import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonToolbar, Form, Text } from "rsuite";
import { setUser } from "../services/appSlice";
import { AppDispatch, RootState } from "../services/store";

const RegistrationForm2: React.FC = () => {
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
        <Form.Group controlId="phone">
          <Form.ControlLabel>Phone</Form.ControlLabel>
          <Form.Control name="Phone" type="Phone" />
          <Form.HelpText tooltip>Phone is required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control
            name="password"
            type="password"
            value={user.password}
            onChange={handlePasswordChange}
            autoComplete="off"
          />
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
