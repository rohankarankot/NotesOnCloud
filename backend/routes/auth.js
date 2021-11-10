const express = require("express");
const router = express.Router();
const User = require("../modals/User");

//Create a new User Using: POST "api/auth"  NOT require Auth
router.post("/", (req, res) => {
  res.send(req.body);
  console.log(req.body);
  const user = User(req.body);
  user.save();
});

module.exports = router;
