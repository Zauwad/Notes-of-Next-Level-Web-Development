// const x = require('./9-8 Exploring Common.js, Import, Export & Name Alias - 1')
const { a:x } = require('./9-8 Exploring Common.js, Import, Export & Name Alias - 1') //! Destructured exports
const { a:y } = require('./9-8 Exploring Common.js, Import, Export & Name Alias - 3')

// const {add}= require('./utils/9-8 Add')
// const {subs}= require('./utils/9-8 Subs')
const {add, subs} = require('./utils') //! By exporting all from index.js in utils, didnt have to manually require each funciton                                //! Dont have to write './utils/index' since kept all in index.js

// console.log(a)
console.log(x)  // ! -> x = 10 exported from another js file  
console.log(y)

console.log(add(5,7))
console.log(subs(x,y))