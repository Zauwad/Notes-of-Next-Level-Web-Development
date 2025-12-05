// Problem Statement

// you are given two large arrays, tistA and listB. Each array contains user objects.
// A user Object is guaranteed to have a unique id property (a string) and may contain other data, such as a name.

// Your task is to write an efficient function that takes both tists as input
// and returns the totat count of users that are present in both tists.

// ! Do not change anything in data setup part

// ---------------Data setup block----------------------
const USER_COUNT = 50000;
let usersA = []
let usersB = []

const createuser = (id) => ({
    id: `user_${id}`,
    name: `User ${id}`
}) //! Will return a object with id and name

for (let i = 0; i < USER_COUNT; i++) {
    usersA.push(createuser(i)) //! pushing object with id and name to usersA
    usersB.push(createuser(i + 25000)) //! pushing object with id and name to usersB
}
// console.log(usersA)
// console.log(usersB)


// users 25000 to 49999 are common (25, 000 common users) //! since at point userA will start having object with id starting from 25000
// ----------Data setup block-----------------

// ----- ALGORITHMS-----
const commonFriendsSlow = (usersA, usersB) => {
    const startTime = performance.now()
    const commonFriends = []

    // ! O(n2)
    usersA.forEach(userA => { // ! O(n)
        usersB.forEach(userB => { // ! O(n)
            if (userA.id === userB.id) {
                commonFriends.push(userA)
            }
        })
    });
    const endTime = performance.now()

    return {
        TotalCommonFriends: commonFriends.length,
        TimeTookToFind: endTime - startTime
    }
}
console.log('commonFriendsSlow Algorithm->', commonFriendsSlow(usersA, usersB))



const commonFriendsFast = (usersA, usersB) => {
    const startTime = performance.now()
    const commonFriends = []
    const usersAset = new Set(usersA.map(userA => userA.id)) //!O(n) //! If only made set with userA whole object. it will store objects reference then we wouldnt be able to compare

    //! O(n)
    usersB.forEach(userB => { //! O(n)
        if (usersAset.has(userB.id)) { //! O(1)
            commonFriends.push(userB)
        }
    })

    const endTime = performance.now()
    return {
        TotalCommonFriends: commonFriends.length,
        TimeTookToFind: endTime - startTime
    }
    //! Total O(n) instead of last one having O(n2)
}
console.log('commonFriendsFast Algorithm->', commonFriendsFast(usersA, usersB))


//! Try to complete the task by self
//! Then try to optimize
//! Try to minimize loops