//! uNSHIFT OVERVIEW
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.unshift("Orange");
// console.log(fruits);        // ["Orange", "Apple", "Banana", "Mango"]

//!
// APPEND -> ADDING A NODE AT THE LAST. SIMILAR TO ARRAY.PUSH(ELEMENT)
// PREPEND -> ADDING A NODE AT THE FIRST. SIMILAR TO ARRAY.UNSHIFT(ELEMENT)


class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


class LinkedList {
    // Linked List needs head and tail var to keep track. can keep size as well
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value) {
        //! creating a new node
        const newNode = new Node(value)

        if (this.head === null) {
            // WHEN THE LINKED LIST IS EMPTY
            this.head = newNode //! Since theres no head so newNode is the new head
            this.tail = newNode //! Since no tail, we'll mark head as tail for first elem
        } else {
            // WHEN NOT EMPTY
            this.tail.next = newNode //! Past tails next node going to be newNode
            this.tail = newNode //! newNode is going to be the new tail
        }

        this.length++
    }

    prepend() {}

    insert() {}

    remove() {}

    print() {
        // let temp = this.head
        let currentNode = this.head

        const arr = []

        while(currentNode != null){
            // console.log(currentNode.data)
            arr.push(currentNode.data)//! To show data visually
            currentNode = currentNode.next
        }

        console.log(arr.join('->') + '->null')
    }
}

const linkedList = new LinkedList()
linkedList.append(10)
linkedList.append(20)
linkedList.append(30)

linkedList.print()