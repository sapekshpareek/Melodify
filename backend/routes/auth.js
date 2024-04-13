const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/helper");

router.post("/register", async (req, res) => {
  const { email, password, firstName, lastName, userName } = req.body;

  const user = await User.findOne({ email: email });
  const name = await User.findOne({ userName: userName });
  if (user) {
    return res.status(403).json({ error: "User already exists." });
  } else if (name) {
    return res.status(403).json({ error: "Username Should be Unique!" });
  }

  const hashedPassword = bcrypt.hash(password, 10);
  const newUserData = {
    email,
    password: hashedPassword,
    firstName,
    lastName,
    userName,
  };
  const newUser = await User.create(newUserData);

  const token = await getToken(email, newUser);

  const userToReturn = { ...newUser.toJSON(), token };
  delete userToReturn.password;
  return res.status(200).json(userToReturn);
});
