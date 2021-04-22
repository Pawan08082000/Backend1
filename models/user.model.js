const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: false,
    required: "Your Name is required",
  },
  email: {
    type: String,
    unique: true,
    required: "Your email is required",
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    required: "Your username is required",
  },
  mobilenumber:{
      type: Number,
      unique: true,
      required: "Your mobile number is required",
  },
  password: {
    type: String,
    required: "Your password is required",
    max: 100,
  },
  status: {
    type: String,
    enum: ["Pending", "Active"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  confirmationCode: {
    type: String,
    unique: true,
  },
});


// mongoose.set("useFindAndModify", false);
module.exports = mongoose.model("User", UserSchema);
