const mongoose = require("mongoose");
const mongoUrI =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongoose = () => {
  mongoose.connect(mongoUrI, () => {
    console.log("Connected to Mongo successfully");
  });
};

module.exports = connectToMongoose;
