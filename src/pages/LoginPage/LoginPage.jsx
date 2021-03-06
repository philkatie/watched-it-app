import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage(props) {

  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state)
      props.handleSignUpOrLogin();
      navigate('/')
    } catch(err) {
      console.log(err.message);
      setError(err.message)
    }
  };
  

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="orange" textAlign="center">
            Log-in to your account
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                type="email"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={state.password}
                onChange={handleChange}
                required
              />
              <Button color="teal" fluid size="large" type="submit" className="btn">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/signup">Sign Up</Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
        </Grid.Column>
      </Grid>
    </>
  );
}
