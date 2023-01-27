// Stack Implementation
interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
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
const inputArray: Number[] = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, 120, -1, 80, -1, 90, -1, -1, 40, -1, -1, -1]

class DriverCode {
    // Generic Tree Formation.
    generateGenericTree(): void {
        let root: TreeNode;
        const stackStorage = new Stack<TreeNode>();
        for (let i = 0; i < inputArray.length; i++) {
            console.log("Stack Storage: ", stackStorage);
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
    }
}

const runCode = new DriverCode();
runCode.generateGenericTree();