// ! Generic means normal
// ! Dynamically Generalize

// type GenericArray = Array<string>
type GenericArray<T> = Array<T> //! TypeScript er variable thats why used T as variable inside <>

const friends: string[] = ['Karim', 'Rahim', 'Fahim']
const friends2: Array<string> = ['Karim', 'Rahim', 'Fahim'] //! Same as above but with angle bracket
const friends3: GenericArray<string> = ['Karim', 'Rahim', 'Fahim'] //! Same as above but with GENERICs

const rollNumbers: number[] = [1, 2, 3]
const rollNumbers2: Array<number> = [1, 2, 3]  //! With Angle Bracket
const rollNumbers3: GenericArray<number> = [1, 2, 3]

const isEligible: boolean[] = [true, false, true]
const isEligible2: Array<boolean> = [true, false, true]
const isEligible3: GenericArray<boolean> = [true, false, true]

//!Objects using above GenericArray
const userList: GenericArray<object> = [{ name: 'Mr.X', age: 20 }, { name: 'Mr.Y', age: 25 }, { favouriteColor: 'Blue' }] //! Here objects doenst have any specific format which is a problem
//* const userList2: GenericArray<{ name: string; age: number }> = [{ name: 'Mr.X', age: 20 }, { name: 'Mr.Y', age: 25 }, { favouriteColor: 'Blue' }]
type User = {name: string;age: number} //! To make above comment code more clean
const userList2: GenericArray<User> = [{ name: 'Mr.X', age: 20 }, { name: 'Mr.Y', age: 25 }, { favouriteColor: 'Blue' }]
// ! Now the Array of objects has to have the format in angle Brackets <>


// ! Tuple
// ! A tuple is like an array, but with predefined types and length
// type Coordinates = [number, number]
type Coordinates<X, Y> = [X, Y]

const coordinates1: Coordinates<number, number> = [20, 30]
const coordinates2: Coordinates<string, string> = ['20', '30']

