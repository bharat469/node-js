let Express = require("express");
let DbConnection = require("./DbConnection");
let App = Express();
App.use(Express.json());

App.post("/", async (req, resp) => {
  let data = await DbConnection();
  //   data = await data.find().toArray();
  const Insert = await data.insert(req.body);
  if (Insert.acknowledged) {
    // resp.send(data);
    resp.send(req.body);
    console.log("Successfull data stored ...");
  } else {
    console.log("Not Able to Success in Storing Data .....");
  }
});

App.listen("5000");
