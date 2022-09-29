let express = require("express");
let requestTime = require("./routes/route");
let app = express();

let route = express.Router();

route.use(requestTime);

route.get("", (req, resp) => {
  resp.send("This is homePage");
});
app.get("/profile", (req, resp) => {
  resp.send("This is Profile");
});

route.get("/xxx", (req, resp) => {
  resp.send("<h1>This is A adult channel</h1>");
});

app.use("/", route);

app.listen("8000");
