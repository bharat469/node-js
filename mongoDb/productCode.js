const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const database = "Socity";

const GetData = async () => {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("userData");
};

module.exports = GetData;
