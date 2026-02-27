const fs = require("fs");

console.log("File reading started...");
fs.readFile("./data/entries/diary.txt", "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
  }
  console.log("Data read:");
  console.log(data);
});
// fs.readFileSync(path)

console.log("File reading done (will be logged first cz of asynchronous)");  //! Difference between sync and asynchronous