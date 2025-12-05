// QUEUE
// FIFO -> FIRST ONE FIRST OUT
// LIKE BANK
// USER REQUEST QUEUE

// ENQUEUE ->  adds in last 
// DEQUEUE -> pops the first one rather than last. Will have to move right ones to left
// PEEK -> Will peek the first one rather than last.

class Node {
    constructor(data) {
        this.next = null
        this.data = data
    }
}

// ! Stack is the same when using both array or linkedList. O(n) same for each method in both for stack
class Queue {
    constructor() {
        this.head = null
        this.tail = null //! could use front and rear for head tail
        this.length = 0
    }

    // O(1) 
    enqueue(data) {
        const nodeToAdd = new Node(data)

        // if (this.head === null) { //! when queue is empty //! can use this too, but queue generally has isEmpty method
        // if (!this.isEmpty()) { //! when queue is empty //! //! will get !0 value(error) if using this approach
        if (this.isEmpty()) { //! when queue is empty //!
            this.head = nodeToAdd
            this.tail = nodeToAdd
        } else { //! when queue not empty
            this.tail.next = nodeToAdd
            this.tail = nodeToAdd
        }
        this.length++;
    }

    // O(1) //! Unlike in array implementation whhere it was-> O(n)
    dequeue() {
        if (this.isEmpty()) { //! When no node in queue
            return undefined
        }

        if (this.head.next === null) { //! When only one node left in queue
            this.tail == null
        }
        // if(this.head === this.tail){
        //     this.tail == null //! this way can be used as well when only one node left
        // }


        this.head = this.head.next
        this.length--;
    }

    // O(1) 
    peek() {
        return this.head ? this.head.data : undefined
    }

    // O(1)
    isEmpty() {
        // return this.length
        return this.length === 0 //! Has to return a boolean. cz here 'if (this.isEmpty())' -> inside () cant be 0. !0 -> error, doesnt give !false val
    }

    // O(n)
    print() {
        let tempNode = this.head //! cz will start from head

        while (tempNode != null) {
            console.log(tempNode.data + ' ->', tempNode.next === null ? 'null' : '') //!  added ternery operator to know when to add null at the end
            tempNode = tempNode.next
        }
    }
}



const queue = new Queue()
console.log('Priniting queue after creation->')
queue.print()

queue.enqueue(10)
console.log('Peeking the queue->',queue.peek())
console.log('Priniting queue after adding a value->')
queue.print()