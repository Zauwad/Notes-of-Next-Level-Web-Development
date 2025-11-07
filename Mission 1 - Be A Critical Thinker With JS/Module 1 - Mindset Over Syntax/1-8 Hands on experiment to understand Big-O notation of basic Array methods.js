// If time increases linearly, then it's O(n)



// One Method to get time 
let startTime = performance.now()
for (let i = 0; i <= 5000; i++) {
    console.log(i)
}
let endTime = performance.now()

let totalTime = endTime - startTime
console.log(`Total Time Took -> ${totalTime }ms`)



// Another method to get time 
console.time("task")
for (let i = 0; i <= 5000; i++) {
    console.log(i)
}
console.timeEnd("task")



// Testing
let firstArray = []
let secondArray = []

for (let i = 0; i < 600000; i++) {
    if (i < 300000) {
        firstArray.push(i)
    }
    secondArray.push(i)
}
console.log('firstArray:', firstArray.length)
console.log('SecondArray:', secondArray.length)



// TESTING WITH MAP -> O(n)
console.time('map1');
const firstUserList = firstArray.map((number) => ({ userId: number }))
// console.log(firstUserList)
console.timeEnd('map1')

console.time('map2');
const secondUserList = secondArray.map((number) => ({ userId: number }))
console.timeEnd('map2')
/*
The parentheses around ({ userId: number }) in the arrow function are necessary to explicitly return an object literal from the map function.

In JavaScript arrow functions, when you write the function body without curly braces, the expression right after the arrow is implicitly returned. However, if you want to return an object literal, just using curly braces directly after the arrow would be confused as the start of the function body, not an object. To solve this, the object must be wrapped in parentheses, which tells JavaScript to interpret the curly braces as an object literal to return instead of a function body.
*/





// TESTING WITH find -> O(n)
console.time('find');
const user = secondUserList.find((userObj) => userObj.userId === 500000)  //increases linearly
console.timeEnd('find')


// TESTING WITH indexing -> O(n)
//Example of O(1)
console.time('indexing');
const user2 = secondUserList[500000]
console.timeEnd('indexing')