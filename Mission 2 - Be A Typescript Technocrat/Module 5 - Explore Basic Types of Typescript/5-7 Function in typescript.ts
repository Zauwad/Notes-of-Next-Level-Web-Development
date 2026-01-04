// Function
// Arrow function, normal function

// function sum(num1, num2) { //! Here num1, num2 is declared any type ; implicitly
//     return num1 + num2     //! -> function sum(num1: any, num2: any): any
// }
// console.log(sum(2, '2')) //! no problem occurs
function sumNormal(num1: number, num2: number): number { //! declared that, return will be a number
    return num1 + num2
}
// console.log(sumNormal(2, '2')) //! It will be a problem

const sumArrow = (num1: number, num2: number): number => num1 + num2 //! This func in arrow 



// method in object
const user = {
    name: "Ridwanul Azim",
    balance: 0,

    //! method
    addBalance(value: number): number {
        return value + this.balance
    }
}
console.log(user.addBalance(20000))



const arr: number[] = [2, 4, 6]
const sqrArray = arr.map((elem: number): number => elem * elem) // ! Callback function in loop