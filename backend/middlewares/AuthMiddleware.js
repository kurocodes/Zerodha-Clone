require("dotenv").config();
const UsersModel = require("../models/usersModel.js");
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ status: false });
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            res.json({ status: false });
        } else {
            const user = await UsersModel.findById(data.id);
            if (user) {
                return res.json({ status: true, user: user.username })
            } else {
                return res.json({ status: false });
            }
        }
    })
}