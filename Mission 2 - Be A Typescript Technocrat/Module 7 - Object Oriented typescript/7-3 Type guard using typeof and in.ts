//! Type Guard
//! typeof, in


//! typeof Type Guard
type AlphaNumerical = string | number
const add = (num1: AlphaNumerical, num2: AlphaNumerical) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {   //! Type Guard or Type Narrow
        return num1 + num2 //!HERE TS WILL GIVE SUGGESTION FOR NUMBER DUE TO TYPE GUARD
    } else {
        return num1.toString() + num2.toString()
    }
}

console.log(add(5, '5'))
console.log(add('5', 5))
console.log(add('5', '5'))
console.log(add(5, 5))




//! in Type Guard
type NormalUser = {
    name: string;
}
type AdminUser = {
    name: string;
    role: string
}
const getUserInfo = (user: NormalUser | AdminUser) => {
    if ('role' in user) {
        console.log(`${user.name} and his role is ${user.role}`)  //! Only due to type guard, ts will give suggestion for user.role
    } else { 
        console.log(`${user.name}`)
    }
}
getUserInfo({
    name: 'Mr. X',
    role: 'Admin'
})