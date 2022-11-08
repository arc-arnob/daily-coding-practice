import java.util.*;

public class Main {
    private static class Node {
        int data;
        ArrayList < Node > children = new ArrayList < > ();
    }
    
    public static void main (String [] args) {
        int [] arr = {10, 20, -1, 30, 50, -1, 60, -1, -1, 40, -1, -1};
        
        // Construct a tree = 
        Node root = constructTree(arr);
        
        display(root);
        
        // int size = size(root);
        // System.out.println("Size of the tree == " + size);
    }
    
    public static void display (Node root) {
        String str = root.data + "->";
        
        for (Node child : root.children) {
            str += child.data + ",";
        }
        str += ".";
        System.out.println(str);
        for (Node child : root.children) {
            display(child);
        }
    }
    
    public static Node constructTree (int [] arr ) {
        
        /*
        Algorithm - 
        1. Pass the element - 
        2.
            if element is not -1 -> 
            
                a) create node, set data
                    if stack is empty - declare the node as root 
                    else add the element to the children of that node which is present on the top of stack
                c) push the node to stack
            else - when element is -1
                a) pop from the stack
            
        */
        Stack < Node > st = new Stack < > ();
        Node root = null;
        for (int element : arr) {
            if (element != -1) {
                Node node = new Node();
                node.data = element;
                if (st.size() > 0) {
                    st.peek().children.add(node);
                } else {
                    root = node;
                }
                st.push(node);
            } else {
                st.pop();
            }
        }
        return root;
    }
    public static int size(Node root) {
        /*
        Algorithm - 
            size of a tree equals sum of sizes of each children + 1 (size of the node)
        */
        int size = 0;
        for (Node child : root.children) {
            int sizeOfChild = size(child);
            size += sizeOfChild;
        }
        size += 1;
        return size;
    }
}