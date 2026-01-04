// Reference type/non primitive type
// Object

// let user = {
//     firstName: 'Ridwanul',
//     middleName: 'Azim',    //! -> let user: { firstName: string; middleName: string; 
//     lastName: 'zawad'      //! lastName: string; } -> implicitly defining this
// }   

let user: {
    firstName: string;
    middleName: string;  //! we are explicitly declaring data type. ' ; ' has to use this!!
    lastName: string;
} = {
    firstName: 'Ridwanul',
    middleName: 'Azim',
    lastName: 'zawad'
}

let user2: {
    firstName: string;
    middleName?: string;  //! Now this one is optional.
    lastName: string;
    isMarried: boolean;
} = {
    firstName: 'Ridwanul',
    lastName: 'zawad',
    isMarried: false
}
// user2. //! '.' wil show all the attributes of object. useful for big projects
 
let user3: {
    firstName: "Ridwanul"; //! value ->  literal type value set. will always be Ridwanul
    // readonly firstName : 'Ridwanul' //! Can be done in this manner as well
    middleName?: string; 
    lastName: string;
    isMarried: boolean;
} = {
    firstName: 'Ridwanul',
    lastName: 'zawad',
    isMarried: false
}