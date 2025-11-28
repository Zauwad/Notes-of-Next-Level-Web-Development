// To understand the concepts
// TO THINK CRITICALLY

//STATELESS vs STATEFUL
// stateful -> can hold a value through multiple iterations. ex.object
// stateless ->  can't.... . ex.function

// Lexical environment -> block elements of a function

const counter = (amount) => {
    let count = 0

    count += amount
    return count
}
console.log('Updating count Using functions(stateless)->')
console.log(counter(2))
console.log(counter(3))

const counter2 = {
    count: 0,

    add(amount) { //! funcitons inside objects called method
        this.count += amount
    },

    print() {
        console.log('Updating count Using object(stateful)->', this.count)
    }
}
counter2.add(2)
counter2.add(3)
counter2.print()

//! Thats why we use objects(stateful) for data structures