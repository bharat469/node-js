const express = require("express");
const add = express();

add.get("", (req, res) => {
  res.send("This is  a HomePage");
});

add.get("/about", (req, res) => {
  console.log("request data", req.query);
  res.send("This is a About Page");
});

add.get("/help", (req, res) => {
  res.send("This is a Help Page");
});

add.listen("8000");
