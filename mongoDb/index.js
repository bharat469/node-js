let GetData = require("./productCode");

// GetData().then((resp) => {
//   resp
//     .find({})
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

const showData = async () => {
  let data = await GetData();
  data = await data.find({ rent: true }).toArray();
  console.log(data);
};

showData();
