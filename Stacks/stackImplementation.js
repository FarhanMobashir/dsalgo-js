class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {

        return this.top;
    }
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode
        } else {
            let holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;


    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.length === 1) {
            this.bottom = null
        }
        this.top = this.top.next;
        this.length--;
    }
}

let myStack = new Stack();
console.log(myStack.peek());
console.log(myStack.push('hello'));
console.log(myStack.push('Bye'));
myStack.pop();
myStack.pop();

console.dir(myStack, { depth: null })
