//! WITH COMMON JS. (CJS)
// // const x = require('./9-8 Exploring Common.js, Import, Export & Name Alias - 1')
// const { a:x } = require('./9-8 Exploring Common.js, Import, Export & Name Alias - 1') //! Destructured exports
// const { a:y } = require('./9-8 Exploring Common.js, Import, Export & Name Alias - 3')
//! require is not defined in ES module scope, you can use import instead

// // const {add}= require('./utils/9-8 Add')
// // const {subs}= require('./utils/9-8 Subs')
// const {add, subs} = require('./utils') //! By exporting all from index.js in utils, didnt have to manually require each funciton                                //! Dont have to write './utils/index' since kept all in index.js

// // console.log(a)
// console.log(x)  // ! -> x = 10 exported from another js file
// console.log(y)

// console.log(add(5,7))
// console.log(subs(x,y))




//! WITH ESM. (mjs)
import { a } from "./9-9 Exploring Common.js, Import, Export & Name Alias - 1.js";
import { a as x} from "./9-9 Exploring Common.js, Import, Export & Name Alias - 2.js";
import utils from './utils_esm/index.mjs'   //! Have to manually add index.mjs. Cant import only utils folder like in cjs(common js) above

console.log(a);
console.log(x);


console.log(utils.add(a,x))
console.log(utils.biyog(a,x))