// * ? ->Ternary Operator -> decision making
// * ?? -> Nullish coalescing operator -> Only works with null and undefined
// * ?. -> optional chaining

// * Ternary
const isEligible = (age: number) => {
    // if (age >= 21) {
    //     console.log('You Are Elgible!!')
    // }else{
    //     console.log('You are not Eligible')
    // }

    const result = age >= 21 ? 'You are Eligible!!' : 'You are not Eligible'
    console.log(result)
}
isEligible(20)


// * Nullish Coalescing
// const userTheme = null
const userTheme = 'Black'
const selectedTheme = userTheme ?? 'Light Theme' //! If null or undefined only then 'light theme'
console.log(selectedTheme)

//* ternary and nullish
// const isAuthenticatd = 'Is Authenticated'
// const isAuthenticatd = null
const isAuthenticatd = ''

const resultWithTernary = isAuthenticatd ? isAuthenticatd : 'Not Authenticated'
const resultWithNullish = isAuthenticatd ?? 'Not Authenticated' //! Wont work for this one since value is '' instead of null or undefined
console.log({ resultWithTernary }, { resultWithNullish })


// * Optional Chaining
const user: {
    address: {
        city: string;
        place: string;
        postalCode?: string
    }
} = {
    address: {
        city: 'Mirpur',
        place: 'Arambagh'
    }
}

// const postalCode = user.address.postalCode //! This brings crash in code cz of undefined
const postalCode = user?.address?.postalCode
console.log(postalCode) 