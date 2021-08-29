const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");

const app = express();
dotenv.config();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/auth", authRoute);
app.use("/posts", postRoute);

app.get("/", (req, res) => {
  res.send("API running");
});

mongoose
  .connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening to PORT ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("Mongoose Connect Error", error));
