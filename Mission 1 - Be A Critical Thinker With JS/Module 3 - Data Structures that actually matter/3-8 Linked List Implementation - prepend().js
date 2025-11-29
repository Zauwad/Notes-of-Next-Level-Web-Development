class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value) {

        const newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            // WHen NOt Empty
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;

        return this
    }

    prepend(value) {

        const newNode = new Node(value)
        if (this.head === null) {
            // WHEN THE LINKED LIST IS EMPTY
            this.head = newNode //! Same logic as before
            this.tail = newNode
        } else {
            // WHEN NOT EMPTY
            newNode.next = this.head //! The newNode is added at first, so its next is to be current lists first node
            this.head = newNode //! the new head is to be newNode
        }
        this.length++;

        return this
    }

    insert(index, data) {
        if (index < 0 || index >= this.length) {
            console.error('Out of Bound')
            return undefined
        }

        //! if added at first position
        if (index === 0) {
            this.prepend(data) // THIS is like prepend so using that function
            return this.prepend(data) // so code execution ends here
        }
        // if added at last position
        if (index === this.length - 1) {
            this.append(data) // cz idea is like append function
            return this.append(data)
        }

        //! if added at middle or any point
        // Getting the prev node
        // let tempIndex = 0
        // let prevNode = this.head
        // while (tempIndex != index - 1) {
        //     prevNode = prevNode.next
        //     tempIndex++;
        // }
        // console.log(prevNode)
        //! we need this for multiple time so lets make a separate method for it

        const prevNode = this._traverseToIndex(index - 1)
        // const nextNode = this._traverseToIndex(index) 
        const nextNode = prevNode.next
        console.log('Previous node->' + prevNode, 'Next node->' + nextNode)

        const newNode = new Node(data)
        prevNode.next = newNode
        newNode.next = nextNode
    }

    //! '_' -> private helper method
    _traverseToIndex(index) {
        let tempIndex = 0
        let currentNode = this.head //! cz has to start from first

        while (tempIndex != index) {
            currentNode = currentNode.next //! here if im looking for 3 indexed node, the 3 indexed node is added to currentNode while looping through index 2. cz of .next
            tempIndex++;
        }
        return currentNode
    }


    print() {
        let currentNode = this.head

        const arr = [] //! only for better visualising data
        while (currentNode != null) {
            arr.push(currentNode.data)
            currentNode = currentNode.next
        }
        console.log(arr.join('->') + '->null')
    }
}


const linkedList = new LinkedList()
linkedList.append(10)
linkedList.append(20)
linkedList.append(30)
// linkedList.append(10).append(20).append(30) //! Can do this chaining as well. has to add return this after method. // this->linkedList

console.log('After Appending data->')
linkedList.print()

linkedList.prepend(1)
linkedList.prepend(2)
linkedList.prepend(3)
console.log('After prepending data->')
linkedList.print()

linkedList.insert(2, 500) //! Here the node before is supposed to be 2
console.log('After inserting a node at an index->')
linkedList.print()