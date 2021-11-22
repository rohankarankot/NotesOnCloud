const express = require("express");
const router = express.Router();
const User = require("../modals/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const fetchuser = require("../MiddleWares/fetchuser");
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
    let success = false;
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
          .json({ success, errors: "The email address is already in use." });
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
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.send({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ success, error: "internal server error" });
    }
  }
);
//LOgin  a new User Using: POST "api/auth/login"  NOT require Auth
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Hmm...!!! Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const email = req.body.email;
    const password = req.body.password;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res.status(400).send({
          success: false,
          error: "Login Failed.... Please try again.",
        });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(500)
          .send({ error: "Login Failed.... Please try again." });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.send({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ error: "internal server error" });
    }
  }
);

//get logged in User Details Using: POST "api/auth/getuser"  Require Auth
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "internal server error" });
  }
});

module.exports = router;
