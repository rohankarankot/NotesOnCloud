const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  data = {
    name: "notes",
  };
  res.json(data);
});

module.exports = router;
