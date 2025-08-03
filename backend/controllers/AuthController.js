const UsersModel = require("../models/usersModel.js");
const { createSecretToken } = require("../utils/SecretToken.js");
const bcrypt = require("bcryptjs");

module.exports.signup = async (req, res, next) => {
  try {
    const { email, username, password, createdAt } = req.body;
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await UsersModel.create({
      email,
      username,
      password,
      createdAt,
    });
    const token = createSecretToken(user._id);
    
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user, token });
  } catch (error) {
    console.error(error);
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await UsersModel.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true, token });
  } catch (error) {
    console.error(error);
  }
};

// module.exports.logout = async (req, res) => {
//   res.clearCookie("token");
//   res.status(200).json({ message: "Logged out successfully" });
// }

module.exports.getUserData = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UsersModel.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
  }
}