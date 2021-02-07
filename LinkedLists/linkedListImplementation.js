/*
? 4 --> 7 --> 19 
 */

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    // adding the append method
    append(val) {

    }
}

const myLinkedList = new LinkedList(4);
myLinkedList.append(6)
console.log(myLinkedList);