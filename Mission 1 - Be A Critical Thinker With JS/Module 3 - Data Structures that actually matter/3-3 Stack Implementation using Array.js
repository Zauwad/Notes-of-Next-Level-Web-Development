// STACK
// LIFO -> LAST IN FIRST OUT. LAST ONE IS THE FIRST ONE TO GET OUT. 
// UNDO REDO
// BUILDING ONE ELEMENT ON ANOTHER. LIKE TOWER

// POP -> removing last element
// PUSH -> pushing something at last
// PEEK -> just viewing the last element

// We'll implement stack using arrays for simplicity. Queue and other cant be implemented by arrays.
class Stack {
    constructor(){
        this.items = []
    }

    // O(1)
    push(item){
        this.items.push(item)
    }

    // O(1)
    pop(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items.pop() //! will popp the elem plus WIll return the popped element as well
    }

    // O(1)
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.items.length - 1]
    }

    // O(1)
    isEmpty(){ //! might need lot of time to check if empty, so makin a method instead.
        return this.items.length === 0
    }

    // O(n)
    print(){
        // console.log('All Items->', this.items.reverse().join('->')) //! Mutates the original array, so pops the wrong element as order is reversed

        console.log('All items->', this.items.slice().reverse().join('->')) //! slice returns new array instead of mutilation, since no parameter in slice nothing is sliced.
    }
}


const stack = new Stack

console.log('peeking stack beginning->')
stack.peek()
console.log('Checkign if stack empty->',stack.isEmpty())

stack.push(10)
stack.push(20)
stack.push(30)
console.log('Peeking stack after pushing->',stack.peek())
console.log('printing whole stack after pushing')
stack.print()

console.log(stack.pop())
console.log('peeking after popping element->')
console.log(stack.peek())
stack.print()