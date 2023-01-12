const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },

  email: {
    type: String,
    unique: true,
    lowercase: true,
  },

  photo: {
    type: String,
    default: process.env.DEFAULT_PROFILE_PIC,
  },

  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
  },

  role: {
    type: String,
    enum: ["user", "expert", "admin"],
    default: "user",
  },

  posts: {
    type: mongoose.Schema.ObjectId,
    ref: "Post",
  },

});

userSchema.methods.correctPassword = async (candidatePassword, userPassword) => await bcrypt.compare(candidatePassword, userPassword);

const User = mongoose.model("User", userSchema);
module.exports = User;