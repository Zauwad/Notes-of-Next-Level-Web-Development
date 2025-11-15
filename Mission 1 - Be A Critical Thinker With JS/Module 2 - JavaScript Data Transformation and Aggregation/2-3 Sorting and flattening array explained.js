// Sort
const numbers = [40, 60, 80, 100, 25, 10]
const fruits = ['Banana', 'Date', 'apple', 'cherry']

// const sortedNumbers = numbers.sort()  -> Returns an weird sorted array  as per default priority set inside
const sortedNumbers = numbers.sort((a, b) => a - b)
// const sortedStrings = fruits.sort() //! This one sorts as per capital alphabetical order first then small letter alphabetical order next
const sortedStrings = fruits.sort((a, b) => a.localeCompare(b)) //! This one sorts irrespect of capital or small letter

console.log('Numbers Array ->', numbers) //! Inplace sorting -> changes the actual array as well. This is time and space efficient as no other array is being created again
console.log('Sorted Numbers Array ->', sortedNumbers)
// console.log(sortedStrings) -> First one Ouputs this-> [ 'apple', 'Banana', 'cherry', 'Date' ] cz Second sortedStrings changes actual array as well
console.log('Sorted Strings Array ->', sortedStrings)



// NEsted Array Flat
const nestedArr = [10, 40, 20, [60, 90, [400, 600, [5, 7, 9]]]]

const flatArr = nestedArr.flat() //! Breaks the first layer nested array
const flatArr2 = nestedArr.flat(2) //! Breaks first two layer nested array
const allflatArr = nestedArr.flat(Infinity) //! Breaks all layer

console.log('flat Array->', flatArr)
console.log('flat Array2->', flatArr2)
console.log('allflatArr->', allflatArr)



// Duplicate tags handle
const tagsFromPosts = [
    ['javascript', 'react', 'css'],
    ['node', 'express'],
    ['css', 'html', 'react']
]

const flatTagsFromPosts = tagsFromPosts.flat() //! Here css and react are duplicated
const flatTagsFromPosts2 = [...new Set(tagsFromPosts.flat())]  //! Set "S" Capital letter //! Here all duplicates will be removed. '...' to get values

console.log('flatTagsFromPosts -> ', flatTagsFromPosts)
console.log('flatTagsFromPosts2 no Duplicates ->', flatTagsFromPosts2)