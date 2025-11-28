// How we can keep the tables neat and clean -> Normalization [stage 1,2,3 normal form etc.]
// So we can retrieve them easily
// Denormalization -> join normalized data together. When get backend data in two tables then we join them to get structured data.
//! Sneaky thing to keep in mind ->
// const scores = {
//   1: "Excellent",
//   2: "Good",
//   3: "Average"
// };
// // Accessing with bracket notation
// console.log(scores[1]);      // Output: "Excellent"  //! both string and non-string version gets value from object
// console.log(scores["2"]);    // Output: "Good"       //!




const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" }
];
const posts = [
  { id: 101, userId: 1, title: "Understanding JavaScript Closures" },
  { id: 102, userId: 2, title: "React vs Vue: A Developer's Perspective" },
  { id: 103, userId: 1, title: "CSS Grid Layout Crash Course" },
  { id: 104, userId: 3, title: "Mastering Async/Await in JS" },
  { id: 105, userId: 2, title: "Building REST APIs with Node.js" },
];
// We want to structure a data set where we can find users multiple posts
// we can do by brute force with nested loop but -> O(n2) 
// So we will make a lookUp Table of this dataset -> O(n)
// then we can get data from that lookUp Table -> O(1)


//! O(n)
const postsPerUserId = posts.reduce((lookUpTable, post)=>{
  // const {userId} = [post]

  if (!lookUpTable[post.userId]){
    lookUpTable[post.userId] = []
  }
  // else{
  //   lookUpTable[post.userId].push(post)  //! Wrong -> cz after if statement works then else statement will be neglected, so first ones to get in are getting ignored.
  // }
  lookUpTable[post.userId].push(post) //! has to work each time, even after creating empty array when there was no userId property.

  return lookUpTable //! VERY IMPORTANT. TENDs TO SLIPS AWAY FROM MIND.
},{})
console.log('Getting total posts of per user in an array-> \n',postsPerUserId)



//! O(n)
const postsPerUserIdWithUserInfo = users.map((user) => {
  return  {
    ...user,                            //! TO GET PAST VALUES AS WELL IN EACH ITERATION.
    posts : postsPerUserId[user.id]//!O(1)//! THIS WILL RETURN THE VALUE OF users ELEMENTS IN EACH ITERATION to new array AS OBJECTS. ADDING PAST INFO, IN
                                        //!                                                                                      ADDITION TO TOTAL POSTS.
  }
})
console.log('Getting total posts of per user with their info in an array-> \n',JSON.stringify(postsPerUserIdWithUserInfo))


//! TOTAL -> O(n)