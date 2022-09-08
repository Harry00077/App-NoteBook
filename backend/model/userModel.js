const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    image: { type: String },
    email: { type: String },
    password: { type: String },
  },
  { timestaps: true }
);

const Users = mongoose.model("User", userSchema);

module.exports = Users;
