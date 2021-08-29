const express = require("express");

const { getPosts, createPost, likePost } = require("../controller/post");
const { auth } = require("../middleware/auth");

const router = express.Router();

router.get("/:lat/:lon", getPosts);
router.post("/", auth, createPost);
router.patch("/:id/likePost", auth, likePost);

module.exports = router;
