class MyStack {
	private q1: Queue<number>;
	private q2: Queue<number>;
	constructor() {
		// create two queues, q1 and q2
		this.q1 = new Queue<number>();
		this.q2 = new Queue<number>();
	}
	push(x: number): void {

		this.q2.enqueue(x);

		// Dequeue all q1 and enqueue it to q2
		while (!this.q1.isEmpty()) {
			let poppedElement: number | null = this.q1.dequeue()
			if (poppedElement !== null) {
				this.q2.enqueue(poppedElement);
			}
		}

		// Enqueue all q2 to q1
		while (!this.q2.isEmpty()) {
			let poppedElement: number | null = this.q2.dequeue()
			if (poppedElement !== null) {
				this.q1.enqueue(poppedElement);
			}

		}

		// Clear q2
		this.q2.clear();
	}

	pop(): number | null {
		return this.q1.dequeue();
	}

	top(): number {
		return this.q1.front();
	}

	empty(): boolean {
		return this.q1.isEmpty();
	}


}

class Queue<T> {
	private items: T[];
	constructor() {
		this.items = [];
	}

	enqueue(x: T): void {
		this.items.push(x);
	}

	dequeue(): T | null {
		return this.items?.shift() ?? null;
	}

	front(): T {
		return this.items[0];
	}

	isEmpty(): boolean {
		return this.items.length === 0;
	}

	clear(): void {
		this.items = [];
	}

}


var obj = new MyStack()
obj.push(10);
obj.push(20);
obj.push(30);
obj.push(40);
var param_2 = obj.pop()
var param_2 = obj.pop()
var param_2 = obj.pop()
var param_3 = obj.top()
var param_4 = obj.empty()

console.log(param_4, param_3);

