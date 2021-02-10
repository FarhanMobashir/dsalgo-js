class Stack {
    constructor() {
        this.values = [];
    }
    add(value) {
        this.values.push(value);
    }
    peek() {
        return this.values[this.values.length - 1];
    }
    remove() {
        this.values.pop();
    }
}

let myStack = new Stack();
myStack.add('hello')
myStack.add('World')
console.log(myStack.peek())
myStack.remove();
console.log(myStack)