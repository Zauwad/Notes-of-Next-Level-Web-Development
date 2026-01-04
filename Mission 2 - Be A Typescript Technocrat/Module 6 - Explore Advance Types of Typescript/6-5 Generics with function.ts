// const createArrayFromString = (value: string) => [value]
// const createArrayFromNumber = (value: number) => [value]
// const createArrayFromObject = (value: { id: number; name: string }) => [value]
// const createArrayWithGeneric = <T>(value: T): T[] => [value]  
const createArrayWithGeneric = <T>(value: T) => [value]  //! HERE NOT SPECIFYING ':T[]' CAUSE THE ARRAY HAS TO BE FILLED WITH TYPE T. SO SPECIFYING NOT NEEDED FOR RETURNED VALUE

// const arrString = createArrayFromString('Good')
// const arrNum = createArrayFromNumber(10)
// const arrObj = createArrayFromObject({ id: 20, name: 'Rahim' })
const arrString = createArrayWithGeneric<string>('Good') //! Here explicitely mentioning type(string) in <>
const arrstring2 = createArrayWithGeneric('Good') //! Same as above code //! Here ts implicitely defines type as string
const arrNum2 = createArrayWithGeneric(10)
const arrObj2 = createArrayWithGeneric({ id: 20, name: 'Rahim' })

// ! we are not using '|' in type defining as it does not provide specific type. the value will be like-> string | number. not number or string specifically



// ! Tuple
// ! Creating normal to see where dynamically change needed
const creatingTuple = (value1: string, value2: string) => [value1, value2]  //! HERE VALUE1 AND VALUE2 ARE PARAMETER
const creatingTuple2 = (value1: number, value2: object) => [value1, value2]

const creatingTupleWithGeneric = <X, Y>(value1: X, value2: Y) => [value1, value2]
const tupleStringNumber = creatingTupleWithGeneric<string, number>('Good', 20)   //! HERE GOOD AND 20 ARE ARGUMENT
const tupleStringNumber2 = creatingTupleWithGeneric('Good', 20) //! Same as Above
const tupleNumberObject = creatingTupleWithGeneric(20, { id: 20, name: 'Rahim' })


// ! Object
const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        Course: 'level 2',
        ...studentInfo
    }
}

const student1 = {
    name: 'Rahim',
    hasPc: true
}
const student2 = {
    name: 'Kahim',
    hasPc: false
}
// const student3 = 'Poor Fahim' //! Wont work cause spread operator works for array or object over there
const result1 = addStudentToCourse(student1)
const result2 = addStudentToCourse(student2)
// const result3 = addStudentToCourse(student3)
console.log(result1)
console.log(result2)
// console.log(result3)
// ! BUT THIS HAS PROBLEM, AS THE OBJECTS ATTRIBUTES ARE NOT SPECIFIED!