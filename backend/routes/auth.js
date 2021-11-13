const express = require("express");
const router = express.Router();
const User = require("../modals/User");

//Create a new User Using: POST "api/auth"  NOT require Auth
router.post("/", (req, res) => {});

module.exports = router;
