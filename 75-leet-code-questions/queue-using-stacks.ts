/**
 * Implement a first in first out (FIFO) queue using only two stacks. 
 * The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

    void push(int x) Pushes element x to the back of the queue.
    int pop() Removes the element from the front of the queue and returns it.
    int peek() Returns the element at the front of the queue.
    boolean empty() Returns true if the queue is empty, false otherwise.

Notes:

    You must use only standard operations of a stack, which means only push to top
    , peek/pop from top, size, and is empty operations are valid.
    Depending on your language, the stack may not be supported natively.
     You may simulate a stack using a list or deque (double-ended queue) as 
     long as you use only a stack's standard operations.

 */

/**
 * Follow-up: Can you implement the queue such that each operation is
 *  amortized O(1) time complexity? In other words, performing n 
 * operations will take overall O(n) time even if one of those operations 
 * may take longer.
 */

// Before Push, move all elements to auxilary stack, push the element
// Move all elements from aux stack to original stack.
// Stack Implementation

interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}

class QStack<T> implements IStack<T> {
    private storage: T[] = [];

    constructor(private capacity: number = Infinity) { }

    push(item: T): void {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }

    pop(): T | undefined {
        return this.storage.pop();
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    size(): number {
        return this.storage.length;
    }
}

class pusedoQueue {
    primaryStack: QStack<number>;
    auxilaryStack: QStack<number>;
    constructor() {
        // Main Stack
        this.primaryStack = new QStack<number>();
        // Auxilary Stack
        this.auxilaryStack = new QStack<number>();

    }
    // O(N)
    push(x: number): void {
        while (this.primaryStack.size()) {
            const shiftingElement = this.primaryStack.pop();
            this.auxilaryStack.push(shiftingElement);
        }
        this.primaryStack.push(x);
        while (this.auxilaryStack.size()) {
            const shiftingElement = this.auxilaryStack.pop();
            this.primaryStack.push(shiftingElement);
        }
    }

    pop(): number {
        return this.primaryStack.pop();
    }

    peek(): number {
        return this.primaryStack.peek();
    }

    empty(): boolean {
        return this.primaryStack.size() === 0 ? true : false;
    }
}

const queue = new pusedoQueue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

console.log(queue.peek())
