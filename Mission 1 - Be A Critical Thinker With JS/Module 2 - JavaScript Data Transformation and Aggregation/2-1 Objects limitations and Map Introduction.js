const obj = {
    nextLevel: {courseId: 'level2'},
    'programming hero': {courseId: 'level1'},
    true: {courseId: "level3"} // object converts this boolean key to string
}
console.log('Whole Object->', obj)
console.log('nextLevel value using dot->', obj.nextLevel)

// console.log(obj.programming hero) -> This will give error!!
console.log('programming hero value using []->', obj['programming hero']) //This one correct!
console.log('nextLevel value using []->', obj['nextLevel']) //Can also be written in this way
console.log('true value using []->', obj['true'])

// adding key-value to object
obj.newNextlevel = {courseId: 'newLevel2'}
obj['false'] = {courseId: 'newLevel3'}
obj[false] = {courseId: 'newLevel33'} //Obj will auto convert this boolean to string
console.log('New Whole Object Value After Adding->',obj)





// OBJECT'S LIMITATION IS WE CANT STORE AN OBJECT AS KEY. ONLY SYMBOLS AND STRING CAN BE OBJECT KEY
const course1 = {name: 'Complete Web Developement'}
const course2 = {name: 'Next Level Web Developement'}

const newObj = {}

newObj.nextLevel = {courseId: 'level2'} //OutPut -> nextLevel: { courseId: 'level2' }
// newObj.course1 = course1           // This will create a separate key with 'course1' string(not course1 object key) with course1 value.
newObj[course1] = {courseId: 'level1'} //OutPut -> '[object Object]': { courseId: 'level1' }
console.log('New Object after adding one proper key and one object as key->',newObj)
console.log('Getting the object object key value->',newObj["[object Object]"])
// console.log('Getting the object object key value->',newObj.[object Object]) //This will give syntax error

newObj[course1] = {courseId: 'level1'}
newObj[course2] = {courseId: 'level2'}
console.log('New Object after adding two object as keys->',newObj)   // OutPut-> '[object Object]': { courseId: 'level2' }-> Here the object object key took the last value it got(level2). 





// TO OVERCOME THIS ISSUE OF KEY, WE WILL USE A NEW DATA STRUCTURE NAMED "MAP"!!!
// const course1 = {name: 'Complete Web Developement'}
// const course2 = {name: 'Next Level Web Developement'}
const map = new Map()         //M capital letter
map.set(1, 'Programming Hero')
map.set(true, 'Programming Hero2')       ////Now We can set boolean as key
map.set(course2, {courseId: 'level2'})   //Now We can set object as key
console.log('Getting The Value Of Map->',map)



// Map methods
// map.clear()    // Will clear map data
console.log('map size->',map.size)  //Will get the size

map.delete(course2)    //Will delete that key value
console.log('Getting The Value Of Map after deleting->',map)

console.log('Map has method(searching course2)->',map.has(course2))

map.set(course2, {courseId: 'level2'})
map.forEach((value,key)=>{       // FOREACH E ALWAYS AGE VALUE THEN KEY PARENTHESIS() E!!!!
    console.log('key->', key, 'value->', value)
})

// manupulating data in map
const course1new = {name: 'Complete Web Developement'}
const course2new = {name: 'Next Level Web Developement'}
map.set(course1new, {courseId: 'level1'})
map.set(course2new, {courseId: 'level2'})
// map.forEach((value,key)=>{key.name = 'shohoj shorol simple ' + key.name})
console.log('After manupulating data in map using forEach->', map)

console.log('Getting the key values only->',map.keys())     //This is a iterator only
console.log('Putting the keys iterator into an array using spread operator->', [...map.keys()])

for (const key of map.keys()) {
    key.name = "shohoj shorol simple " + key.name
}
console.log('After manupulating data in map using loop and map.keys()->',map)

console.log('Getting entries of a map. Keys and values in arrays separated->', map.entries())

// Making a map of a 2D Matrix. CZ 2D matrix has key value alike structure unlike array or set
const courses = [
    [course1new, 'level1'],
    [course2new, 'level2']
]
const mapFromMatrix = new Map(courses)        //M capital letter
console.log('Map From Matrix->',mapFromMatrix)