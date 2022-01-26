const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please type your name!"],
  },
  nrc: {
    type: String,
    trim: true,
    required: [true, "NRC number is required!"],
  },
  age: { type: Number, trim: true, required: [true, "Please type your age!"] },
  email: {
    type: String,
    trim: true,
    required: [true, "Please type your email!"],
  },
  phone: {
    type: String,
    trim: true,
    required: [true, "Please type your phone no!"],
  },
  title: {
    type: String,
    trim: true,
    required: [true, "Please type Choose title!"],
  },
  dob: {
    type: Date,
    trim: true,
    required: [true, "Date of birth is required!"],
  },
  gender: {
    type: String,
    trim: true,
    required: [true, "Please type Choose gender!"],
  },
  pic: {
    type: String,
    trim: true,
    required: [true, "Profile picture is required!"],
  },
});

module.exports = mongoose.model("member", MemberSchema);
