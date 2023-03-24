const router = require("express").Router();

// Models
const User = require("../models/User.js");

router.post("/user", async (req, res) => {
  try {
    console.log(req);
  } catch (error) {}
});
