/*
? 4 --> 7 --> 19 
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
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
        const newNode = new Node(val)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(val) {
        const newNode = new Node(val)
        newNode.next = this.head;
        // this.head.value = newNode;
        this.head = newNode
        this.length++;
    }
    insert(value, index) {
        if (index >= this.length) {
            console.log('yes')
            return this.append(value);
        }
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        let newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const pointer = leader.next;
        leader.next = newNode;
        newNode.next = pointer;
        this.length++;
    }
    remove(index) {
        if (index >= 0) {
            let leader = this.traverseToIndex(index - 1);
            let finalPointer = this.traverseToIndex(index + 1);
            leader.next = finalPointer;
            this.length--;
        }

    }
    traverseToIndex(index) {
        let i = 0;
        let pointer;
        let currentNode = this.head
        while (i !== index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode;
    }
    printList() {
        let list = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(list)
    }
    lastItem() {
        let currentNode = this.head;
        let lastNode;
        while (currentNode !== null) {
            lastNode = currentNode
            currentNode = currentNode.next;

        }
        return lastNode;
    }
    findLength() {
        let currentNode = this.head;
        let counter = 0;
        while (currentNode !== null) {
            currentNode = currentNode.next;
            counter++
        }
        console.log(counter)
        return counter;
    }
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}



const myLinkedList = new LinkedList(4);
myLinkedList.append(6)
myLinkedList.append(10)
myLinkedList.append(13)
// console.log(myLinkedList);
// console.dir(myLinkedList, { depth: null });
// myLinkedList.traverseToIndex(3);
// myLinkedList.findLength();
// myLinkedList.reverse();
myLinkedList.printList();
