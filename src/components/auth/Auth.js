import React, { useState } from "react";
import { Avatar, Button, Container, Grid, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import SignIn from "./SignIn";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { useStyle } from "./style";
import SignUp from "./SignUp";
import { signIn, signUp } from "../../actions/auth";

const Auth = () => {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    if (isSignUp) dispatch(signUp(data, history));
    else dispatch(signIn(data, history));
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSignUpState = () => {
    setData({ name: "", email: "", password: "", confirmPassword: "" });
    setIsSignUp((prevState) => setIsSignUp(!prevState));
  };

  return (
    <Grid
      className={classes.grid}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Container className={classes.container} maxWidth="sm">
        <Grid
          className={classes.infoGrid}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Typography>
        </Grid>
        {isSignUp ? (
          <SignUp handleChange={handleChange} />
        ) : (
          <SignIn handleChange={handleChange} />
        )}
        <Container className={classes.buttonContainer} maxWidth="sm">
          <Button
            variant="contained"
            fullWidth
            color="secondary"
            full
            onClick={handleAuth}
          >
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignUpState}
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "Create a new account"}
          </Button>
        </Container>
      </Container>
    </Grid>
  );
};

export default Auth;
