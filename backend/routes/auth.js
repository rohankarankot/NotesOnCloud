const express = require("express");
const router = express.Router();
const User = require("../modals/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const JWT_SECRET = "qwe&^$*sdfghsdfgh";
const jwt = require("jsonwebtoken");
//Create a new User Using: POST "api/auth/createuser"  NOT require Auth
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 3 }),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // checking whether the user is unique or not
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ errors: "The email address is already in use." });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        email: req.body.email,
        name: req.body.name,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const awthToken = jwt.sign(data, JWT_SECRET);
      res.send({ awthToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ error: "internal server error" });
    }
  }
);

module.exports = router;
