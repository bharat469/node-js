let fs = require("fs");
let path = require("path");
let dirname = path.join(__dirname, "files");
let data = " hello my friend you did a great job";

// create function

// fs.writeFileSync(`${dirname}/TestFile.txt`, "This is a text tst ");

// update function
fs.appendFileSync(`${dirname}/TestFile.txt`, data, (err) => {
  if (err) {
    console.log("data is not updated");
  } else {
    console.log("data is updated");
  }
});

// read files

fs.readFile(`${dirname}/TestFile.txt`, "utf-8", (err, files) => {
  return console.log("files", files);
});

// rename
fs.rename(`${dirname}/TestFile.txt`, `${dirname}/MainFiles.txt`, (err) => {
  err ? console.log(err) : console.log("successfull");
});

// delete
fs.unlinkSync(`${dirname}/MainFiles.txt`);
