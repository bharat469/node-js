let { MongoClient } = require("mongodb");
let url = "mongodb://localhost:27017";
let Client = new MongoClient(url);
let Database = "Socity";

const DbConnection = async () => {
  let result = await Client.connect();
  let db = result.db(Database);
  return db.collection("userData");
};

module.exports = DbConnection;
