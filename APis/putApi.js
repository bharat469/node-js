const e = require("express");
let express = require("express");
let DbConnection = require("./DbConnection");

let app = express();

app.use(express.json());

app.put("", async (req, resp) => {
  let data = await DbConnection();
  const mainData = await data.find().toArray();
  //   console.log(mainData);
  let Name = mainData.find((item) => {
    return item.name === req.body.name;
  });
  console.log(Name);

  if (Name) {
    const result = await data.updateOne(
      { name: Name.name },
      { $set: req.body }
    );
    if (result.acknowledged) {
      resp.send({ Status: " Success" });
    } else {
      resp.send({ Status: "Failed" });
    }
  } else {
    resp.send({ Status: "Failed" });
    console.log("Failed .....");
  }
});

app.listen("8000");
