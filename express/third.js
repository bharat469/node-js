const express = require("express");
const path = require("path");
const app = express();

const dirname = path.join(__dirname, "file");
app.set("view engine", "ejs");

app.get("", (req, resp) => {
  resp.sendFile(`${dirname}/home.html`);
});

app.get("/profile", (req, resp) => {
  const data = {
    name: "Bharat joshi",
    phone: "7466948492",
    email: "joshibharat469@gmail.com",
    skills: ["js", "node js", "React js", "React Native"],
  };
  resp.render("profile", { data });
});

app.get("/about", (req, resp) => {
  resp.sendFile(`${dirname}/about.html`);
});

app.get("/help", (req, resp) => {
  resp.sendFile(`${dirname}/help.html`);
});

app.get("*", (req, resp) => {
  resp.sendFile(`${dirname}/404.html`);
});

app.listen("9000");
