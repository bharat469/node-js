var mongoose = require("mongoose");
url = "mongodb://localhost:27017/Socity";

mongoose.connect(url);
const ProductScheme = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  maintaince: Boolean,
  rent: Boolean,
});
// const read = async () => {
//   const ProductModal = new mongoose.model("userData", ProductScheme);
//   let data = new ProductModal({
//     name: "King",
//     phoneNumber: "8097895648",
//     maintaince: true,
//     rent: true,
//   });
//   let result = await data.save();
//   console.log(result);
// };
// read();

// const update = async () => {
//   const ProductModal = new mongoose.model("userData", ProductScheme);
//   let data = await ProductModal.updateOne(
//     { name: "bharat" },
//     { $set: { name: "BHARAT", rent: false } }
//   );
//   if (data.acknowledged) {
//     if (data.modifiedCount === 0) {
//       console.log("  Not added SuccessFully");
//     } else {
//       console.log("SuccessFully added");
//     }
//   } else {
//     console.log("SuccessFully not added");
//   }
// };

// update();

// const Delete = async () => {
//   const ProductModal = new mongoose.model("userData", ProductScheme);
//   let data = await ProductModal.deleteOne({ name: "BHARAT" });

//   if (data.acknowledged) {
//     if (data.deletedCount === 0) {
//       console.log("Record Not Found");
//     } else {
//       console.log("Record Successfully Deleted");
//     }
//   }
// };

// Delete();
