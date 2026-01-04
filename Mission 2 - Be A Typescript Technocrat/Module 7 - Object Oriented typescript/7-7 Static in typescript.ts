class Counter {
    // count = 0  //! Value set already, so no constructor needed
    static count = 0   //! Now value wont change for different objects. Has to access using 'Counter.count'

    increment() {
        // this.count += 1
        Counter.count += 1

        // console.log(this.count)
        console.log(Counter.count)
    }
    static decrement() {    //! STATIC METHOD
        // this.count -= 1
        Counter.count -= 1

        // console.log(this.count)
        console.log(Counter.count)
    }
}

const instance1 = new Counter()  //! No constructor, so argument to input
instance1.increment()
instance1.increment()
instance1.increment()
instance1.increment()

const instance2 = new Counter()
instance2.increment()
instance2.increment()

console.log('static decrement->')
Counter.decrement()
Counter.decrement()
Counter.decrement()
