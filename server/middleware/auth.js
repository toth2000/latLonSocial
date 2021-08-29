const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const SALT = process.env.SALT;

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedData = jwt.verify(token, SALT);
    req.userId = decodedData.id;

    next();
  } catch (error) {
    console.log("Auth Middleware", error);
    res.status(401).json({ message: "Log in to perform the action" });
  }
};

module.exports = { auth };
