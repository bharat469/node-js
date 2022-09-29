let DbConnection = require("./DbConnection");
let Express = require("express");
let App = Express();

App.get("/", async (req, resp) => {
  let data = await DbConnection();
  data = await data.find().toArray();
  console.log("data", data);
  resp.send({ data });
});

App.listen(4000);
