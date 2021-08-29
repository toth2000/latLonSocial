import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut } from "../../actions/auth";
import decode from "jwt-decode";

import { useStyle } from "./style";

const Appbar = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [anchor, setAnchor] = useState({ open: false, anchorE1: null });

  const userChange = useSelector((state) => state.auth);

  useEffect(() => {
    try {
      setAnchor({ open: false, anchorE1: null });
      setUser(JSON.parse(localStorage.getItem("profile")));

      const token = user.token;
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
    } catch (error) {
      console.log("Appbar useEffect error", error);
    }
  }, [userChange]);

  const handleMenuOpen = (event) => {
    setAnchor({ open: true, anchorE1: event.currentTarget });
  };

  const handleMenuClose = () => {
    setAnchor({ open: false, anchorE1: null });
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Typography
          className={classes.title}
          component={Link}
          to="/"
          variant="h6"
        >
          LatLon Social
        </Typography>
        {user === null ? (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="secondary"
          >
            Login
          </Button>
        ) : (
          <div className={classes.userBox}>
            <Typography variant="h6" className={classes.userName}>
              {user.result?.name}
            </Typography>
            <Avatar
              className={classes.avatar}
              aria-controls="simple-menu"
              aria-haspopup="false"
              onClick={(e) => handleMenuOpen(e)}
            >
              {user.result?.name[0]}
            </Avatar>
            <Menu
              id="simple-menu"
              anchorEl={anchor.anchorE1}
              keepMounted
              open={Boolean(anchor.open)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
