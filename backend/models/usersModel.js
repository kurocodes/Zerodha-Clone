const { model } = require("mongoose");
const { UsersSchema } = require("../schemas/usersSchema.js");

const UsersModel = model("user", UsersSchema);

module.exports = UsersModel;