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

//Rout 3: update password of a user using PUT: "api/password/update"  LOGIN Required

router.put("/update/:id", fetchuser, async (req, res) => {
  const { title, password } = req.body;
  // res.send({ title, password });
  try {
    // Create a newNote object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (password) {
      newNote.password = password;
    }
    // Find the note to be updated and update it
    let note = await passwords.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await passwords.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Rout 4: Delete password of a user using DELETE : "api/password/deletepass"  LOGIN Required

router.delete("/deletepass/:id", fetchuser, async (req, res) => {
  try {
    // Find the password to be delete and delete it
    let note = await passwords.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    // Allow deletion only if user owns this password
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await passwords.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
