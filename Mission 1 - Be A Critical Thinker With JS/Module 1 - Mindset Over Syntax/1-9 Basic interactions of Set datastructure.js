// SET -> DATA STRUCTURE 

const set = new Set()

// To add things in set
set.add("apple")
set.add('banana')
set.add('mango')
set.add('apple')   //Main feature of set is you cant add same something twice. NO DUPLICATES!!

console.log("Value of Set->", set) // Set(3) { 'apple', 'banana', 'mango' }
console.log("Getting the size of a set ->", set.size)  // To get length



// To make an unique solution for something
// Suppose we're making a set of unique views for a website
const rahim = { userName: "Rahim" }
const karim = { userName: "Karim" }
const fahim = { userName: "Fahim" }
const set2 = new Set()

set2.add(rahim)
set2.add(karim)
set2.add(fahim)
set2.add(rahim)

console.log("Getting the size of a set ->", set2.size)
console.log("Value of Set2->", set2)



// Making a set from an array
const arr = ['komola', 'nimbu', 'peyara']
const set3 = new Set(arr)
console.log("Converted to Set from Array", set3)




// what if we wanted to add something in set.
// set3.push('jambura') -> Wrong
set3.add('jambura')
console.log("After Adding new element to set3", set3)





// But we deal with arrays more. 
// What if we wanted to capitalize each element in a set
set3.forEach((value) => console.log("For Each Loop value->", value))
// set only has forEach method. no map, find, filter or other methods!
// forEach doesnt return any value like map

// So we can convert a set to an array after the duplication solution task is done
const arr2 = Array.from(set3)
console.log('Converted to Array from Set->', arr2)
// Now can work with any array methods
// arr2.push(), arr2.map() etc.




// Some Set methods
console.log('Testing Set has method->', set3.has("jambura"))
console.log("Testing Set delete method->", set3.delete("jambura"))
console.log("Testing Set delete method for unknown element->", set3.delete("unknown"))




const arr4 = ['apel', 'morich', 'kola', 'apel']
// Removing duplicates using Brute Force(workAround, manually)
const removeDupWithArr = (arr) => {
    const newArr = []

    arr.forEach((element) => {
        if (!newArr.includes(element)) {
            newArr.push(element)
        }
    })

    return newArr
}
console.log('Removing duplicates using array->', removeDupWithArr(arr4))


// removing duplicates using Sets
const removeDupWithSet = (arr4) => {
    const set4 = new Set(arr4)

    return Array.from(set4)
}
console.log('Removing duplicates using set->',removeDupWithSet(arr4))