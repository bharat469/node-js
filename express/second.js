const express = require("express");
const app = express();

app.get("", (req, resp) => {
  resp.send(`<h1>This is Home Page</h1> <a href='/json'>Go To JSON PAGE</a>`);
});

app.get("/json", (req, resp) => {
  resp.send([
    {
      name: "Bharat",
      PhoneNumber: "7466948492",
    },
    {
      name: "Anjana",
      PhoneNumber: "7466948492",
    },
    {
      name: "Harish",
      PhoneNumber: "7466948492",
    },
    {
      name: "Pooja",
      PhoneNumber: "7466948492",
    },
  ]);
});

app.listen("8000");
