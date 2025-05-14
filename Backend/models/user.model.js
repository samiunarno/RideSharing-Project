const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    minlength: [3, "First name must be at least three characters long"],
  },
  lastname: {
    type: String,
    // required:  true,
    minlength: [3, "Last name must be at least three characters long"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email Must In 5 characters"],
  },
  pasword: {
    type: String,
    required: true,
    select: false,
    // minlength: [8, 'pass Must be In 8 character'],
  },
  socketID: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
