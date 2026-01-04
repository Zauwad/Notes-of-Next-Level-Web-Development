let variable: any   //! Declaring this variable can be anythig
variable = 222;
// variable. //! ts cant detect its type so after '.' its not suggesting any methods
// (variable as number). //! Now it will show suggestions 
// (variable as string). //! BUT ONLY USE TYPE ASSERTION WHEN IM SURE!!




// const kgToGmConverter = (input: string | number) => { //! SInce nothing is being returned, its showing void -> (input: string | number) => void
//     if (typeof input === 'number') {
//         console.log(input * 1000)
//     } else if (typeof input === 'string') {
//         const [value] = input.split(' ')
//         console.log(`Converted to gram- ${Number(value) * 1000}`)
//     }
// }

const kgToGmConverter = (input: string | number) => { //! SInce being returned, its showing -> (input: string | number) => string | number | undefined
    if (typeof input === 'number') {
        return input * 1000
    } else if (typeof input === 'string') {
        const [value] = input.split(' ')
        return `Converted to grams- ${Number(value) * 1000}`
    }
}
const result1 = kgToGmConverter(10)
// result1. //! Here proper suggestions of methods are not showing
const result2 = kgToGmConverter("10 Kg") as number   //! TYPE Assertion!!
// result2. //! Here result 2 is showing suggestions for methods of number   

console.log(result1)
console.log(result2)


//! Setting up type assertion in try catch  
type customError = {
    message: string;
}
try {

} catch (error) {
    console.log((error as customError).message)
}