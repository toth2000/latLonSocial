import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { useStyles } from "./style";
import {
  getCountryName,
  getLocation,
} from "../../../global/functions/location";
import { createPost } from "../../../actions/post";

const CreatePost = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [data, setData] = useState({
    name: user?.result?.name,
    userId: user?.result?._id,
    text: "",
    image: "",
    lat: "",
    lon: "",
    country: "",
  });

  const getLocationData = async () => {
    const coordinate = await getLocation();
    if (!coordinate) return;
    const country = await getCountryName(coordinate);
    if (!country) return;

    setData({
      ...data,
      lat: coordinate.lat,
      lon: coordinate.lon,
      country: country,
    });
  };

  useEffect(() => {
    getLocationData();
  }, []);

  const handleSubmit = async () => {
    console.log('data', data);
    dispatch(createPost(data));
    history.push("/");
  };

  const handleChange = (event) => {
    setData({ ...data, text: event.target.value });
  };

  return (
    <Grid
      className={classes.grid}
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Container className={classes.container} maxWidth="xs">
        <Grid
          className={classes.rowGrid}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography className={classes.heading} variant="h4">
            Create a new post
          </Typography>
          <TextField
            name="text"
            label="Enter Text"
            variant="outlined"
            onChange={(e) => handleChange(e)}
            fullWidth
          />
          <div className={classes.file}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setData({ ...data, image: base64 })}
            />
          </div>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Container>
    </Grid>
  );
};

export default CreatePost;
