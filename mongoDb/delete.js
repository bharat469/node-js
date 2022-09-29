let GetData = require("./productCode");

const Deleted = async () => {
  let data = await GetData();
  let Del = await data.deleteOne({ name: "Dolly" });
  if (Del.acknowledged) {
    if (Del.deletedCount === 0) {
      console.log("No record Found");
    } else {
      console.log("SuccessFully Deleted");
    }
  }
  console.log(Del);
};

Deleted();
