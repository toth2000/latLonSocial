import {
  Avatar,
  CardContent,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  CardActions,
} from "@material-ui/core";
import { Favorite, FavoriteIcon } from "@material-ui/icons";
import React from "react";

import { useStyle } from "./style";

const Post = ({ post }) => {
  const classes = useStyle();

  return (
    <Card className={classes.root} maxWidth="md">
      <CardHeader
        avatar={<Avatar aria-label="recipe">{post.name[0]}</Avatar>}
        title={post.name}
        subheader={post.country}
      />
      {post.image ? (
        <CardMedia className={classes.media} image={post.image} />
      ) : null}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <Favorite />
        </IconButton>
        <Typography variant="caption">{`${post.likes.length} likes`}</Typography>
      </CardActions>
    </Card>
  );
};

export default Post;
