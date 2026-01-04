// Nullable
const getUser = (input: string | null) => {
    if (input) {
        console.log(`From DB ${input}`)
    } else {
        console.log(`From DB All user`)
    }
}

getUser(null)

// Unknown Type
// const discountedPrice = (input: string | number) => {} //! Here it will be a problem when input is null
const discountedPrice = (input: unknown) => {
    if (typeof input === 'number') {
        console.log(input * .1)
    } else if (typeof input === 'string') {
        const [price,] = input.split(' ')
        console.log(Number(price) * .1)
    } else {
        console.log('Invalid Input')
    }

}

// * Void
const throwError = (message: string): never => { //! Since this func will never return anything thats why -> never type
    throw new Error(message)
}

discountedPrice(100)
discountedPrice('100 Tk')
discountedPrice(null)