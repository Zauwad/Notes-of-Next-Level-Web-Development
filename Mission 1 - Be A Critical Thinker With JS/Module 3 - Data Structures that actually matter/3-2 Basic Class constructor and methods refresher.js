// Object oriented programming 
// Functional Programming -> Every Function has to be pure function(for every input same output)


// 1st way to make stateful
let count = 0 //! Now ive made the count var global //! now the below function acts like stateful
const counter = (amount) => {
    // let count = 0 //! count not in lexical environment anymore
    count = count + amount

    return count
}
console.log('Trying first way->')
console.log(counter(2))
console.log(counter(2)) //! But as per functional programming, function isnt giving same output for same inputs
console.log(counter(2))


// 2nd way to make stateful
// Closure -> accessing outer function from inner function
const createCounter = () => {
    let count = 0

    return (amount) => {
        count += amount
        return count
    }
}
const counterr = createCounter() //! Here the first returned method will be returned

console.log('Trying second way->')
console.log(counterr(2))
console.log(counterr(2)) //! But as per functional programming, function isnt giving same output for same inputs
console.log(counterr(2))




// CREATING A CLASS. SO WE CAN MAKE MANY OBJECTS FROM ONE BLUEPRINT
class Counter {
    constructor(count) {
        this.count = count
    }
    add(amount) {
        this.count += amount
    }
    print() {
        console.log(this.count)
    }
}
const counter3 = new Counter(0) // making a new object // STATEFUL, reproduceable. Encapsulation
counter3.add(2)
counter3.add(3)
console.log('printing from object 1->')
counter3.print()


const counter4 = new Counter(10)
counter4.add(20)
counter4.add(30)
console.log('printing from object 2->')
counter4.print()