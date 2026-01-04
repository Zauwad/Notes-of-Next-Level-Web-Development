//* Object destructuring
//* Array destructuring

//* Object destructuring
const user = {
    id: 123,
    name: {
        first: 'Ridwanul',
        middle: 'Azim',
        last: 'Zawad'
    },
    Age: 20,
    favouriteColor: 'Brown'
}
// const age = user.favouriteColor
// const middleName = user.name.middle //! Not Efficient
const { favouriteColor, name: { middle } } = user  //! More efficient
console.log(favouriteColor, middle)



//* Array Destructuring
const friends = ['Rahim', 'karim', ' Jabbar']

// const bestFriend = friends[1]
// console.log(bestFriend) //! NOrmal Way
// const [A, bestFriend, C] = friends //! Better way
const [ ,bestFriend, ] = friends //! can remove left and right while keeping commas
console.log(bestFriend)