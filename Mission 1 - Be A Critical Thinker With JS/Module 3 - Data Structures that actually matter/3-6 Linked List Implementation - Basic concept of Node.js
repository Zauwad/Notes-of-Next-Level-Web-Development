// The linked nodes could be anywhere in memory, not necessarily ordered in memory

// SINGLY LINKED LIST -> ONLY HAS NEXT NODES CONNECTED
// DOUBLY LINKED LIST -> HAS PREVIOUS AND NEXT NODES CONNECTED
// CIRCULAR LINKED LIST -> THE TAIL IS CONNECTED TO HEAD AS WELL

// STACK, QUEUE, DEQUEUE

// DELETING A NODE -> O(1)
// INSERTING A NODE -> O(1)

//  -----------
//  DATA | NEXT  //! -> INDIVIDUAL NODE
//  -----------

// MAKING A NODE
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

const head = new Node(10)
console.log('Getting the single node->', head) //! -> Node { data: 10, next: null }
console.log('heads next elem->', head.next)

head.next = new Node(20)
console.log('head after getting node linked->', head) //!-> Node { data: 10, next: Node { data: 20, next: null } }

head.next.next = new Node(30)
console.log('head after getting second node linked->', head) //! -> head after getting second node linked-> Node { data: 10, next: Node { data: 20, next: Node { data: 30, next: null } } }                                      



// Priniting all nodes in linked list
let temp = head
while(temp != null){
    console.log(temp.data, '->')
    temp = temp.next
}