import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Post from "./post/Post";
import AddIcon from "@material-ui/icons/Add";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useStyles } from "./style";
import { getPost } from "../../actions/post";
import { CircularProgress } from "@material-ui/core";
import { getLocation } from "../../global/functions/location";

const Posts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    getLocation().then((res) => dispatch(getPost(res)));
  }, []);

  return (
    <div className={classes.mainContainer}>
      <Grid
        className={classes.container}
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
      >
        {!posts || posts.length === 0 ? (
          <CircularProgress />
        ) : (
          <>
            {posts.map((x) => (
              <Post post={x} key={x._id} />
            ))}
          </>
        )}
      </Grid>
      <Avatar className={classes.avatar} component={Link} to={"/posts"}>
        <AddIcon />
      </Avatar>
    </div>
  );
};

export default Posts;
