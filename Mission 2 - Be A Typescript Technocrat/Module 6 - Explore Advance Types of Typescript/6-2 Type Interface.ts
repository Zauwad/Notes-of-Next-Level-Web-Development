// ! Interface only works with object data type. Array, Object, Function
//! Can use type or interface for Objects. But for array and function use type as they look more clean
// ! interface Extend most used in object oriented programming. //! Use it when interface(type) extend needed

// ! Objects            
type User = {
    name: string;
    age: number;
}
type Role = {
    role: 'Admin' | 'User'
}
type UserRole = User & Role //! Intersection of types
const user1: UserRole = {
    name: 'Mr. X',
    age: 50,
    role: 'Admin'
}
const user2: User = {
    name: 'Mr. Y',
    age: 20
}
//* Now doing the same above with interface
interface IUser { //! I in IUser just refers interface
    name: string;
    age: number;
}
interface IUserRole extends IUser { //! Similar to type intersection '&'
    role: "admin" | 'user';
}

const user3: IUser = {
    name: 'Mr.YY',
    age: 20
}
const user4: IUserRole = {
    name: "Mr. YYY",
    age: 20,
    role: 'admin'
}




// ! Arrays
type Friends = string[]
const friends: Friends = ['Karim', 'Rahim', 'Fahim']

interface IFriends { //! Friends type written using interface    //! Complex
    [index: number]: string   //! ARRAY IS A SPECIAL OBJECT
}
const friends2: IFriends = ['Karim2', 'Rahim2', 'Fahim2']


// ! Functions
type Add = (num1: number, num2: number) => number
const add1: Add = (num1, num2) => num1 + num2

interface Iadd { //! Add type written using interface   //! Complex
    (num1: number, num2: number): number  //! FUNCTIONS ALSO A SPECIAL OBJECT
}
const add2: Iadd = (num1, num2) => num1 + num2