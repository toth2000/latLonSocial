const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();
const User = require("../model/User");
const SALT = process.env.SALT;

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const existingUser = await User.findOne({ email });
    console.log("existing User", existingUser);
    if (!existingUser)
      return res.status(404).json({ message: "User does not exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SALT,
      { expiresIn: "5h" }
    );

    return res.status(200).json({ result: existingUser, token: token });
  } catch (error) {
    console.log("Auth Controller Sign In", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const signUp = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(404).json({ message: "User already exists" });

    if (password !== confirmPassword)
      return res
        .status(401)
        .json({ message: "Password did not match, Please try again" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: newUser.email, id: newUser._id }, SALT, {
      expiresIn: "5h",
    });

    return res.status(200).json({ result: newUser, token: token });
  } catch (error) {
    console.log("Auth Controller Sign Up", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { signIn, signUp };
