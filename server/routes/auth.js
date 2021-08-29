const express = require("express");
const { signIn, signUp } = require("../controller/auth");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Auth Route");
});

router.post("/signIn", signIn);
router.post("/signUp", signUp);

module.exports = router;
