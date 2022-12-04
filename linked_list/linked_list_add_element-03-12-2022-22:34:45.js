/**
 * Node -> 
 * {
 *  Data,
 *  Next
 * }
 */

class Node {
    constructor(element)
    {
        this.element = element;
        this.next = null
    }  
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(data){
        let node = new Node(data);
        let current;
        if(this.head === null){
            console.log("Called")
            this.head = node;
        }
        else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }
    display(){
        let current = this.head;
        while(current.next){
            console.log(current);
            current = current.next;
        }
    }
}

// Driver
const inputs = [1,2,3,4,5,6,7,8,9,10];

const linkedList = new LinkedList();

for(let i = 0; i < inputs.length; i++){
    linkedList.add(inputs[i]);
}
 linkedList.display();
