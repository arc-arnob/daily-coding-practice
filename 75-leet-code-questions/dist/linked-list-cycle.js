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
var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
        this.next = null;
    }
    return ListNode;
}());
;
var LinkedLst = /** @class */ (function () {
    function LinkedLst() {
        this.head = null;
    }
    LinkedLst.prototype.add = function (value) {
        var newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var current = this.head;
        while (current.next)
            current = current.next;
        current.next = newNode;
        return this.head;
    };
    LinkedLst.prototype.createCircularLinkedList = function (value) {
        var toNode = new ListNode(value);
        var currentNode = this.head;
        var toBeConnectedNode = null;
        if (!currentNode)
            return;
        while (currentNode.next) {
            if (currentNode.data == toNode.data) {
                toBeConnectedNode = currentNode;
            }
            currentNode = currentNode.next;
        }
        if (toBeConnectedNode)
            currentNode.next = toBeConnectedNode;
    };
    ;
    LinkedLst.prototype.display = function () {
        var current = this.head;
        while (current && current.data) {
            console.log(current.data);
            current = current.next;
        }
    };
    LinkedLst.prototype.detectCircularLinking = function () {
        // Space: O(N)
        var hashMap = new Set();
        var currentNode = this.head;
        while (currentNode.next) {
            if (hashMap.has(currentNode))
                return true;
            hashMap.add(currentNode);
            currentNode = currentNode.next;
        }
        return false;
    };
    LinkedLst.prototype.middleOfList = function () {
        var currentNode = this.head;
        var ffPointer = currentNode;
        while (ffPointer && ffPointer.next) {
            currentNode = currentNode.next;
            ffPointer = ffPointer.next.next;
        }
        this.head = currentNode;
    };
    return LinkedLst;
}());
var linkedList = new LinkedLst();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);
linkedList.middleOfList();
// linkedList.createCircularLinkedList(4);
// console.log(linkedList.detectCircularLinking());
linkedList.display();
