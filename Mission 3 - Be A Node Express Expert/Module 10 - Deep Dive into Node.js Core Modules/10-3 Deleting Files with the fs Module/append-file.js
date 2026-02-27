const fs = require("fs");

fs.writeFileSync("./output/app.log", "Application Started...");  //! Have to call this once. Otherwise would cause overwrite!!
console.log('Application started...')

const log1 = `\n${new Date().toISOString()} user logged in`;
fs.appendFileSync("./output/app.log", log1);  //! Doing in sync so we can see what happens after what.  

const log2 = `\n${new Date().toISOString()} user fetched data`;
fs.appendFileSync("./output/app.log", log2);
console.log('Task Completed...') 