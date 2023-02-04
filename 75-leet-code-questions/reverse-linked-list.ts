/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    let currentPointer = head;
    let previousPointer = null;
    let temp: ListNode;
    while (currentPointer) {
        temp = currentPointer.next;
        currentPointer.next = previousPointer;
        previousPointer = currentPointer;
        currentPointer = temp;
    }
    head = previousPointer;
    return head;
};