/**
 * 
 * Given head, the head of a linked list, determine if the linked list 
 * has a cycle in it.
    There is a cycle in a linked list if there is some 
    node in the list that can be reached again by continuously 
    following the next pointer. Internally, pos is used to denote the 
    index of the node that tail's next pointer is connected to. 
    Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. 
Otherwise, return false.
 */

interface NodeStructure {
    data: number,
    next: NodeStructure | null,
}

class ListNode implements NodeStructure {
    data: number;
    next: ListNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
};

class LinkedLst {
    head: ListNode;
    constructor() {
        this.head = null;
    }

    add(value: number): ListNode {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current: ListNode = this.head;
        while (current.next) current = current.next;

        current.next = newNode;

        return this.head;
    }
    display(): void {
        let current = this.head;
        while (current.data) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedList = new LinkedLst();
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);

linkedList.display()