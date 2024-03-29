/**
 * Node -> 
 * {
 *  Data,
 *  Next
 * }
 */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(data) {
        let node = new Node(data);
        let current;
        if (this.head === null) {
            console.log("Called")
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }
    removeFromHead() {
        if (this.head === null) return;
        let current = this.head;
        this.head = current.next
        current.next = null;
    }
    fetchAValueFromLinkedList(data) {
        if (this.head === null) return;
        let current = this.head;
        while (current.next) {
            if (current.element === data) {
                console.log("Found: ", current);
                return;
            }
            current = current.next;
        }
    }
    addAtIndex(data, idx) {
        const node = new Node(data);
        if (idx === 0 && this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        let currentIdx = 0;
        while (idx !== currentIdx) {
            current = current.next;
            currentIdx++;
        }
        const nextNode = current.next;
        current.next = node;
        node.next = nextNode;
    }
    display() {
        let current = this.head;
        while (current) {
            console.log(current);
            current = current.next;
        }
    }
}

// const LinkedList = require("./linked_list_add_element-03-12-2022-22:34:45")

// Driver
const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const linkedList = new LinkedList();

for (let i = 0; i < inputs.length; i++) {
    linkedList.add(inputs[i]);
}
linkedList.display();
console.log("*********END*********")
linkedList.addAtIndex(1000, 4);
linkedList.display();