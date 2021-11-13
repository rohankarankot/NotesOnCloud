const express = require("express");
const router = express.Router();
const User = require("../modals/User");
const { body, validationResult } = require("express-validator");
//Create a new User Using: POST "api/auth"  NOT require Auth
router.post(
  "/",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 3 }),
    body("password").isLength({ min: 5 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.json({ errors: "Email already exists" });
      });
  }
);

module.exports = router;
