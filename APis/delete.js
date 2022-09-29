let express = require("express");
let DbConnection = require("./DbConnection");
let app = express();
app.use(express.json());

app.delete("", async (req, resp) => {
  let data = await DbConnection();
  let dataResult = await data.find().toArray();
  const name = dataResult.find((item) => {
    return item.name === req.body.name;
  });
  console.log(name);

  if (name) {
    let deletedFile = await data.deleteOne({ name: name.name });
    if (deletedFile.acknowledged) {
      if (deletedFile.deletedCount === 0) {
        resp.send({ status: "Not SuccessFull" });
      } else {
        resp.send({ status: "Success" });
        console.log("SuccessFully Deleted");
      }
    }
  } else {
    resp.send({ status: "Not SuccessFull" });
  }
});

app.listen("8000");
