module.exports = requestTime = (req, res, next) => {
  if (!req.query.age) {
    res.send("<h1>Please Enter Your Age</h1>");
  } else if (req.query.age < 18) {
    res.send("<h1>You are UnderAge !!!!!!!!</h1>");
  }
  next();
};
