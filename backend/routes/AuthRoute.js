require("dotenv").config();
const { signup, login, getUserData, logout } = require("../controllers/AuthController.js");
const { userVerification } = require("../middlewares/AuthMiddleware.js");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/verify", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ success: false, message: "token not found" });

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    return res.json({ success: true, user: decoded });
  } catch (error) {
    console.log("Token verification failed:", error.message);
    return res.json({ success: false });
  }
});

router.post("/signup", signup);
router.post("/login", login);
// router.get("/logout", logout);
router.get("/user/:id", getUserData);

module.exports = router;
