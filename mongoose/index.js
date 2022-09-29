var mongoose = require("mongoose");
url = "mongodb://localhost:27017/Socity";

const connectMongoose = async () => {
  await mongoose.connect(url);
  const ProductSchema = new mongoose.Schema({
    name: String,
  });
  const ProductModel = new mongoose.model("userData", ProductSchema);
  let data = new ProductModel({ name: "Appple m1" });
  let result = await data.save();
  console.log(result);
};
00101;
connectMongoose();
