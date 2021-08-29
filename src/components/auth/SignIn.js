import React from "react";
import { Container, TextField } from "@material-ui/core";

import { useStyle } from "./style";

const SignIn = ({ handleChange }) => {
  const classes = useStyle();

  return (
    <Container maxWidth="sm">
      <TextField
        className={classes.input}
        name="email"
        label="Email"
        margin="dense"
        type="email"
        variant="outlined"
        fullWidth
        required
        onChange={(e) => handleChange(e)}
      />
      <TextField
        className={classes.input}
        name="password"
        label="Password"
        margin="dense"
        type="password"
        variant="outlined"
        fullWidth
        required
        onChange={(e) => handleChange(e)}
      />
    </Container>
  );
};

export default SignIn;
