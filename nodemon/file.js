let fs = require("fs");
let path = require("path");

let dirPath = path.join(__dirname, "files");

// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(
//     `${dirPath}/hello${i}.txt`,
//     "This is test case is very good"
//   );
// }

fs.readdir(dirPath, (err, files) => {
  files.forEach((element) => {
    console.log(element);
  });
});
