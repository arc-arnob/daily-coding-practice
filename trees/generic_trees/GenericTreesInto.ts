// Stack Implementation
interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}

interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    head(): T | undefined;
    tail(): T | undefined;
    size(): number;
}

class Queue<T> implements IQueue<T> {
    private storage: T[] = [];

    constructor(private capacity: number = Infinity) { }

    enqueue(item: T): void {
        if (this.size() === this.capacity) {
            throw Error("Queue has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }

    dequeue(): T | undefined {
        return this.storage.shift();
    }

    head(): T | undefined {
        return this.storage[0];
    }

    tail(): T | undefined {
        return this.storage[this.size() - 1];
    }
    size(): number {
        return this.storage.length;
    }
}

class Stack<T> implements IStack<T> {
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

interface NodeStructure {
    data: Number,
    children: NodeStructure[],
}

class TreeNode implements NodeStructure {
    data: Number;
    children: TreeNode[];
}
// Input Array
const inputArray: Number[] = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, 120, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1]

class GenericTree {
    // Generic Tree Formation.
    construct(): TreeNode {
        let root: TreeNode;
        const stackStorage = new Stack<TreeNode>();
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] === -1) {
                stackStorage.pop();
            } else {
                const node = new TreeNode();
                node.data = inputArray[i];
                node.children = [];
                if (stackStorage.size() > 0) {
                    const currentNode: TreeNode = stackStorage.peek();
                    currentNode.children.push(node);
                } else {
                    root = node;
                }
                stackStorage.push(node);
            }
        }
        return root;
    }

    display(node: TreeNode): void {
        // Traverse TreeNode Children.
        node.children.forEach(ele => console.log(ele.data));
        node.children.forEach(ele => this.display(ele));
    }

    size(node: TreeNode): number {
        /**
         * The binary + operator requires both operands to be of the Number primitive type or an enum type, 
         * or at least one of the operands to be of type Any or the String primitive type
         */
        if (!node) return 0;
        let treeSize: number = 1;
        node.children.forEach(ele => treeSize += this.size(ele));

        return treeSize;

    }

    findMaximum(node: TreeNode): Number {
        let maxVal: Number = Number.MIN_VALUE;
        node.children.forEach(ele => {
            let childMax: Number = this.findMaximum(ele);
            if (childMax > maxVal) maxVal = childMax;
        });
        // Compare current node with max of all children.
        if (node.data > maxVal) {
            maxVal = node.data;
        }
        return maxVal;
    }
    /**
     * 
     * Expectation: Our expectation from height(node) is that it will find the distance between root (10) and the node with maximum depth (110) in terms of edges and return this distance as the height of the tree.
        Faith: Our faith is that we get the height of all the root's children nodes (20-1, 30-2 and 40-1)
        How to meet Expectation with Faith: If we add 1 to the maximum height (30-2) then we get the resultant height (2+1=3) 
     * 
     */
    findHeight(node: TreeNode): number {
        let height: number = -1;
        node.children.forEach(ele => {
            const childHeight: number = this.findHeight(ele);
            height = Math.max(height, childHeight);
        })
        height += 1;
        return height;
    }

    levelOrderTraversal(root: TreeNode) {
        // Remove, Print, Add
        // Algo: 
        /**
         * 1. Declare a queue
         * 2. Add Current node to Queue
         * 3. Pop, print and add all children to Queue
         */
        const auxilaryQueue = new Queue<TreeNode>();
        auxilaryQueue.enqueue(root);
        while (auxilaryQueue.size() > 0) {
            node = auxilaryQueue.dequeue();
            console.log(node.data + " ");
            node.children.forEach(child => {
                auxilaryQueue.enqueue(child);
            })
        }

    }

    // Print level order in each line.
    levelOrderLineWise(root: TreeNode) {
        let primaryQueue = new Queue<TreeNode>;
        primaryQueue.enqueue(root);
        let childQueue = new Queue<TreeNode>;
        // process.stdout.write("Welcome to GeeksforGeeks! ");
        while (primaryQueue.size()) {
            const currentNode: TreeNode = primaryQueue.dequeue();
            console.log(currentNode.children);
            currentNode.children.forEach(child => {
                childQueue.enqueue(child);
            })
            if (primaryQueue.size() === 0) {
                primaryQueue = childQueue;
                childQueue = new Queue<TreeNode>;
            }
        }

    }
}

const runCode = new GenericTree();
let node: TreeNode = runCode.construct();
// console.log("Display: ", runCode.display(node));
console.log("Size: ", runCode.size(node));
console.log("Max: ", runCode.findMaximum(node));
console.log("Tree Height: ", runCode.findHeight(node));
// runCode.levelOrderTraversal(node);
runCode.levelOrderLineWise(node);