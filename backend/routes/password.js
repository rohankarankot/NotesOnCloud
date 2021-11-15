const express = require("express");
const router = express.Router();
const fetchuser = require("../MiddleWares/fetchuser");
const passwords = require("../modals/Passwords");
const { body, validationResult } = require("express-validator");

//Rout 1: get all passwords of a user using GET: "api/password/fetchallpasswords"  LOGIN Required

router.get("/fetchallpasswords", fetchuser, async (req, res) => {
  try {
    const allPasswords = await passwords.find({ user: req.user.id });
    res.json(allPasswords);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Rout 2: Add new password of a user using POST: "api/password/addpassword"  LOGIN Required

router.post(
  "/addpassword",
  fetchuser,
  [body("title", "Hmm...!!! add valid title").isLength({ min: 3 })],
  [body("password", "Hmm...!!! add valid password").isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    try {
      const { title, password } = req.body;
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const pass = new passwords({
        user: req.user.id,
        title,
        password,
      });
      const savedPass = await pass.save();
      res.json(savedPass);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
module.exports = router;
