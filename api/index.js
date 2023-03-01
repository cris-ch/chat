const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./models/User");

dotenv.config();
mongoose.connect(process.env.MONGO_URL);
const jwtSecret = process.env.JWT_SECRET;

const app = express();

app.get("/test", (req, res) => {
  res.json("Hello World!");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const createdUser = await User.create({
    username: username,
    password: password,
  });
  res.json("User created");
  jwt.sign({ userId: createdUser._id }, jwtSecret, (error, token) => {
    if (error) throw error;
    res.cookie("token", token).status(201).json("User created");
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});