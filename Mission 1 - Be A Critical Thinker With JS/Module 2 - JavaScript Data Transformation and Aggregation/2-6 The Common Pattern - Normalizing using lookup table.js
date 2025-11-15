// Making a lookUp Table 
 const postsArray = [
  { id: 'p-1', title: "Understanding JavaScript Closures", author: "Alice" },
  { id: 'p-2', title: "React vs Vue: A Developer's Perspective", author: "Bob" },
  { id: 'p-3', title: "CSS Grid Layout Crash Course", author: "Charlie" },
  { id: 'p-4', title: "Mastering Async/Await in JS", author: "Diana" },
  { id: 'p-5', title: "Building REST APIs with Node.js", author: "Ethan" },
];


const lookUpTable = postsArray.reduce((table, post) => {
    table[post.id] = post
    return table
}, {}) //! Table's initial value = {}
console.log(lookUpTable)


// Getting individual value
// const post = postsArray.find(post => post.id === 'p-5') //! O(n) -> So, this one is slow and linear time. 
const post = lookUpTable['p-5']  //! O(1) -> Constant time. That's why lookUp Table is needed. We use it to get fast dropdown values
console.log('individual post->',post)


for (let post in lookUpTable){
    console.log('iterating over lookUpTable->',post)
    console.log('iterating over lookUpTable and getting values->', lookUpTable[post])
}

