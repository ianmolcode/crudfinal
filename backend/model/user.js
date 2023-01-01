const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is Required"],
    trim: true,
    maxlength: [25, "Name must be 25 Ch Long"],
  },
  phone: {
    type: Number,
    require: [true, "Phone number is Required"],
    maxlength: [10, "Phone number  must be 10 Ch Long"],
  },
  age: {
    type: Number,
    require: [true, "age is Required"],
  },
});

module.exports = mongoose.model("user", userSchema);
