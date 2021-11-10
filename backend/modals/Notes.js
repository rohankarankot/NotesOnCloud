const mongoose = require("mongoose");
const { Schema } = require("Schema");

const NotesSchema = new Schema({
  title: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
    default: "General",
  },
  tag: {
    type: "string",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", NotesSchema);
