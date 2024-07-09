const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  isworker: {
    type: Boolean,
    default: false
  },
  city:{
    type: String
  },
  type:{
    type: String
  },
  skills:{
    type:String
  },
  contact:{
    type:String
  }
});

module.exports = mongoose.model("User", userSchema);


// users
