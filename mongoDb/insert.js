let GetData = require("./productCode");

const data = async () => {
  let InData = await GetData();
  const result = await InData.insert([
    {
      name: "Buzo",
      phoneNumber: "222222222",
      rent: true,
      maintenance: false,
    },
    {
      name: "Bruni",
      phoneNumber: "3342222222",
      rent: false,
      maintenance: false,
    },
    {
      name: "Dolly",
      phoneNumber: "2288992222",
      rent: true,
      maintenance: true,
    },
  ]);
  if (result.acknowledged) {
    console.log("SUCCED>>>>!!!!!");
  } else {
    console.log("NOT SUCCEED !!!!!!");
  }
};

data();
