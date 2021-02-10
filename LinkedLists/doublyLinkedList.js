class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        let newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        let newNode = new Node(value);
        this.head.prev = newNode
        newNode.next = this.head;
        this.head = newNode
        this.length++;
    }
    insert(index, value) {
        if (index >= this.length) {
            console.log('yes')
            return this.append(value);
        }
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        let newNode = new Node(value);
        let leader = this.traverseToIndex(index - 1); // 2
        let follower = leader.next; // 3
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        // [1,2,3,5]
    }
    remove(index) {
        let leader = this.traverseToIndex(index - 1);
        let finalPointer = this.traverseToIndex(index + 1);
        leader.next = finalPointer;
        // finalPointer.prev = leader;
        this.length--;
    }
    traverseToIndex(index) {
        let currentNode = this.head;
        let i = 0;
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
        console.log(list);

    }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.prepend(9)
myLinkedList.append(4)
myLinkedList.remove(2)
console.dir(myLinkedList, { depth: null })
// myLinkedList.printList()