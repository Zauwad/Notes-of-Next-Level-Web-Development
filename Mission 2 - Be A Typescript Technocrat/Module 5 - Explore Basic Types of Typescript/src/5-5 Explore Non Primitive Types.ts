//Array, Object
// Tuple


// let bazarlist = ['murgi', 'egg', 'sugar'] //! -> let bazarlist: string[]
let bazarlist: string[] = ['milk', ' egg', 'sugar'] //! Explicitly declaring array of strings
// bazarlist.push(12) //! Wont work since array was declared as array of strings


// let mixedArr = ['milk', 2, 'egg', 12] //! -> let mixedArr: (string | number)[] -> ts implicitly understanding these
let mixedArr: (string | number)[] = ['milk', 2, 'egg', 12] //! Explicitly declaring array of strings or numbers
// mixedArr.push(true) //! Wont work


let coordinates: [number, number] = [20, 40]
// let coordinates2: [number, number] = [20, 40, 50] //! Wont work since decalred only two number will be there. -> tuple

let studentRoll: [string, number] = ['student', 44] //! Has to be a string and numebr
// studentRoll[0] = 44 //! Wont work since first one was supposed to be string