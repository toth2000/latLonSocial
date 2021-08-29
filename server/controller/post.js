const Post = require("../model/Post");
const mongoose = require("mongoose");

/**Function to calculate distance between to co-ordinates */
const getDistance = (lat1, lon1, lat2, lon2) => {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
};

const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

const getPosts = async (req, res) => {
  try {
    const { lat, lon } = req.params;
    const comparator = (a, b) => {
      const dist1 = getDistance(lat, lon, a.lat, a.lon);
      const dist2 = getDistance(lat, lon, b.lat, b.lon);
      if (dist1 < dist2) return -1;
      if (dist1 > dist2) return 1;
      return 0;
    };

    const posts = await Post.find();
    posts.sort(comparator);
    res.status(200).json({ posts: posts });
  } catch (error) {
    console.log("post controller getPost", error);
    return res.status(500).json({ message: "server error" });
  }
};

const createPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = new Post({ ...post, userId: req.userId });
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    console.log("Post controller create post", error);
    res.status(500).json({ message: "Server error" });
  }
};

const likePost = async (req, res) => {
  try {
    const { id: postId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(postId))
      return res
        .status(404)
        .send({ message: "No Post found with the given id." });

    const post = await Post.findById(postId);
    const index = post.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await Post.findByIdAndUpdate(postId, post, {
      new: true,
    });

    res.status(201).json(updatedPost);
  } catch (error) {
    console.log("Post controller likePost", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getPosts, createPost, likePost };
