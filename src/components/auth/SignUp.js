import React from "react";
import { Container, TextField } from "@material-ui/core";

import { useStyle } from "./style";

const SignUp = ({ handleChange }) => {
  const classes = useStyle();

  return (
    <Container maxWidth="sm">
      <TextField
        className={classes.input}
        name="name"
        label="Full Name"
        margin="dense"
        variant="outlined"
        fullWidth
        required
        onChange={(e) => handleChange(e)}
      />
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
        variant="outlined"
        fullWidth
        type="password"
        required
        onChange={(e) => handleChange(e)}
      />

      <TextField
        className={classes.input}
        name="confirmPassword"
        label="Confirm Password"
        margin="dense"
        variant="outlined"
        fullWidth
        required
        onChange={(e) => handleChange(e)}
      />
    </Container>
  );
};

export default SignUp;
