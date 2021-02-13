class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.length === 1) {
            this.last === null
        } else {
            this.first = this.first.next;
        }
        this.length--;

    }
}

let myQueue = new Queue();
myQueue.enqueue('hello')
myQueue.enqueue('JavaScript')
myQueue.enqueue('Bang!')
console.log(myQueue.peek());
myQueue.dequeue();
console.dir(myQueue, { depth: null })