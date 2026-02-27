let args = process.argv;

//*  process.arg[0] -> node
//*  process.arg[1] -> filePath
//*  process.arg[2] -> desired input   //! node .\grettings.js zawad


let name = args[2] || "Guest";
let time = new Date().getHours();
let grettings;

if (time < 12) {
  grettings = "Good Morning";
} else if (time < 18) {
  grettings = "Good Afternoon";
} else {
  grettings = "Good Night";
}

console.log(`${grettings} ${name}`);
