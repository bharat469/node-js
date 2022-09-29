let GetData = require("./productCode");

const Get = async () => {
  let data = await GetData();
  let result = await data.updateOne(
    { name: "Bharat" },
    { $set: { maintenance: true } }
  );
  console.log(result);
};

Get();
