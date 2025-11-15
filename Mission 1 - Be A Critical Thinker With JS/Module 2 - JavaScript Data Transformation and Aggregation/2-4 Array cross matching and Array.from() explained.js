// Some method
const numbers = [1, 2, 3, 4, 5, 6, 7]
const numbers2 = [1, 3, 5, 7, 9]

const hasEvenNumbers = numbers.some(number => number % 2 === 0)  //! Will iterate over numbers and test this condition. Even If one numbers meets condition 
                                                                //! it will give true
const hasEvenNumbers2 = numbers2.some(number => number % 2 === 0)

console.log('hasEvenNumbers->',hasEvenNumbers)
console.log('hasEvenNumbers2->',hasEvenNumbers2)

// Roles Example
const currentUserRoles = ['user', 'editor']
const currentUserRoles2 = ['user', 'editor', 'manager']
const featureAccessRoles = ['admin', 'manager']

const canAccess = currentUserRoles.some(role => featureAccessRoles.includes(role))
const canAccess2 = currentUserRoles2.some(role => featureAccessRoles.includes(role))

console.log('canAccess->',canAccess)
console.log('canAccess2->',canAccess2)




// FROM Method
// const arr = Array.from({length:5}) //! Making an array out of thin air //! Output -> [ undefined, undefined, undefined, undefined, undefined ]
// const arr = Array.from({length:5}).fill(0) //! Will fill with 5 zeroes  //! Output -> [ 0, 0, 0, 0, 0 ]
// const arr = Array.from({length:5}, (_ , i)=>i) //! (_ , i)=>i -> This is a map function. first one iterated value since none so "_", second one gives index
                                                 //! Output -> [ 0, 1, 2, 3, 4 ] 
const arr = Array.from([1, 2, 3, 4], (value, i) => value * value)  //! Getting sqaure values from an array. This time map function has values to iterate over

console.log(arr)



// Manual RANGE method similar to python. USED in pagination
const range = (start, End, step) => Array.from({length: Math.ceil((End-start)/step)}, (_, i) => start + i * step) //! -> This function generates numbers
                                                       //! Math.ceil will round up to upper(ceiling) number. For corner cases
console.log('Manual Range Method->',range(0,7,3))