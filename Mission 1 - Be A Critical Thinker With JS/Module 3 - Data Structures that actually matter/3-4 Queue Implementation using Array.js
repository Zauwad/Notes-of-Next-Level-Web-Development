// QUEUE
// FIFO -> FIRST ONE FIRST OUT
// LIKE BANK
// USER REQUEST QUEUE

// ENQUEUE ->  adds in last 
// DEQUEUE -> pops the first one rather than last. Will have to move right ones to left
// PEEK -> Will peek the first one rather than last.

// Quick shift overview
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const firstFruit = fruits.shift();
// console.log(firstFruit); // "Banana"
// console.log(fruits);     // ["Orange", "Apple", "Mango"]


// We'll implement Queue using arrays for simplicity. Queue, stack and other cant be implemented by arrays.
class Queue {
    constructor() {
        this.items = []
    }

    // O(1)
    enqueue(item){
        this.items.push(item)
    }

    // O(n) //! Here linear complexity. thats why QUEUE not efficient with array unlike STACK
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        this.items.shift()
    }

    // O(1)
    peek(){
        return this.items[0]
    }

    // O(1)
    isEmpty(){
        return this.items.length === 0
    }

    // O(n)
    print(){
        console.log('Start->',this.items.join(' -> '), '-> end')
    }
}

const queue = new Queue

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()

queue.dequeue()
queue.print() 