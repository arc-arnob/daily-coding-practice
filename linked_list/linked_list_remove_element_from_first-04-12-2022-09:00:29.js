import  LinkedList from "./linked_list_add_element-03-12-2022-22:34:45";

// const LinkedList = require("./linked_list_add_element-03-12-2022-22:34:45")

// Driver
const inputs = [1,2,3,4,5,6,7,8,9,10];

const linkedList = new LinkedList();

for(let i = 0; i < inputs.length; i++){
    linkedList.add(inputs[i]);
}
linkedList.display();