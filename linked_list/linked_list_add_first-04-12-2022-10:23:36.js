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
class LinkedList{
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
    addAtFirst(data){
        const node = new Node(data);
        if(this.head === null){
            this.head = node;
            return;
        }
        node.next = this.head;
        this.head = node;
    }
    removeFromHead(){
        if(this.head === null) return;
        let current = this.head;
        this.head = current.next
        current.next = null;
    }
    fetchAValueFromLinkedList(data){
        if(this.head === null) return;
        let current = this.head;
        while(current.next){
            if(current.element === data){
                console.log("Found: ", current);
                return;
            }
            current = current.next;
        }
    }
    display(){
        let current = this.head;
        while(current.next){
            console.log(current);
            current = current.next;
        }
    }
}

// const LinkedList = require("./linked_list_add_element-03-12-2022-22:34:45")

// Driver
const inputs = [1,2,3,4,5,6,7,8,9,10];

const linkedList = new LinkedList();

for(let i = 0; i < inputs.length; i++){
    linkedList.add(inputs[i]);
}
linkedList.display();
console.log("*********END*********")
linkedList.removeFromHead();
linkedList.display();
console.log("*********END*********")
linkedList.fetchAValueFromLinkedList(4);
console.log("*********END*********")
linkedList.addAtFirst(1000);
linkedList.display();
console.log("*********END*********")