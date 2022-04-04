const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

//demoapp is a collection name.
//creating model for the schema
const UserModel = mongoose.model("demoapp", UserSchema);
module.exports = UserModel;