const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  text: { type: String },
  image: { type: String },
  lat: { type: String, required: true },
  lon: { type: String, required: true },
  country: { type: String, required: true },
  likes: { type: [String], default: [] },
});

module.exports = mongoose.model("Post", postSchema);
