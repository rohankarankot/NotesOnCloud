const mongoose = require("mongoose");
const { Schema } = mongoose;

const PasswordsSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
const passwords = mongoose.model("passwords", PasswordsSchema);
module.exports = passwords;
