
class ListNode {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        let node = new ListNode(data);
        if (this.head === null) {
            this.head = node;
        }
        else {
            let current = this.head;
            while (current.next) current = current.next;
            current.next = node;
        }
    }
    display() {
        let current = this.head;
        while (current) {
            console.log(current.element);
            current = current.next;
        }
    }
}

const mergeSorted = (listNode1, listNode2) => {
    let curr1 = listNode1.head;
    let curr2 = listNode2.head;

    while (curr1.next && curr2.next) {
        if (curr1.element <= curr1.element) {
            const ptr = curr1.next;
            curr1.next = curr2;
            curr1 = ptr;
        } else {
            const ptr = curr2.next;
            curr2.next = curr1;
            curr2 = ptr
        }
    }
}

const mergeSortedRecursively = (listNode1, listNode2) => {
    if (listNode1 === null) return listNode2;
    if (listNode2 === null) return listNode1;

    if (listNode1.element <= listNode2.element) {
        listNode1.next = mergeSortedRecursively(listNode1.next, listNode2);
        return listNode1;
    } else {
        listNode2.next = mergeSortedRecursively(listNode1, listNode2.next);
        return listNode2;
    }

}

function printList(node) {
    while (node != null) {
        console.log(node.element);
        node = node.next;
    }
}

const ll = new LinkedList();

const ll2 = new LinkedList();

ll.add(1);
ll.add(2);
ll.add(4);
ll.add(8);

ll2.add(8);
ll2.add(3);
ll2.add(4);
ll2.add(10);

mergedList = mergeSortedRecursively(ll.head, ll2.head);
printList(mergedList);



