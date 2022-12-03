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
        if(this.head === null) this.head = node;
        else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }
}