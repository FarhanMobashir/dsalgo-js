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
        let leader = this.traverseToIndex(index - 1);
        let finalPointer = this.traverseToIndex(index + 1);
        leader.next = finalPointer;
        this.length--;
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

}

const myLinkedList = new LinkedList(4);
myLinkedList.append(6)
myLinkedList.append('hello')
myLinkedList.prepend(1)
myLinkedList.prepend('mobashir')
// console.log(myLinkedList);
// console.dir(myLinkedList, { depth: null });
// myLinkedList.traverseToIndex(3);
myLinkedList.insert('Farhan', 2);
myLinkedList.remove(1);
myLinkedList.printList();