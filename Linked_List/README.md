------------------LINKED LIST----------
A linked list is a linear data structure where each element (called a node) points to the next one, forming a sequence. Unlike arrays, linked lists do not store data in contiguous memory locations. Each node in a linked list contains two parts:

        Data - the actual value to be stored in the list.
        Pointer (or link) - a reference to the next node in the sequence.


     Types of Linked Lists--->

Singly Linked List:
                     Each node has one pointer pointing to the next node. This structure is unidirectional, meaning it can be traversed in only one direction.

Doubly Linked List: 
                    Each node has two pointers, one pointing to the next node and one to the previous node, allowing traversal in both directions.

Circular Linked List: 
                    The last node's pointer points back to the first node, creating a circular structure.

1.The LinkedList class has a head property representing the first node.
2.The insert method adds a new node at the beginning.
3.The display method traverses the list and prints each node's data

           Example of a Singly Linked List-->


A singly linked list is the simplest type, where each node has data and a single pointer to the next node.

Operations:

Insertion:  Adding a node at the beginning, middle, or end of the list.
Deletion:   Removing a node from the list.
Traversal:  Moving through the list to access each node's data.
Search:     Finding a node containing specific data.



________________________Creating a new node :


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert a new node at the beginning
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
}
__________________________> Displays the node:

 display() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        result += "NULL";
        console.log(result);
    }


------------------------------------->

               INSERT NEW NODE First : Javascript 
            
        constructor() {
        this.head = null;
    }

    // Insert a new node at the beginning
    insert(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);



INSERT AT END OF Linked List:


insertAtBeginning: Adds a new node at the start of the list.
insertAtEnd:
              If the list is empty (head is null), it assigns the new node as the head.
              If the list has nodes, it traverses to the last node (where current.next is null) and sets current.next to the new node.
display: Prints out the list in sequence.
  

  
     // Insert a new node at the end
    insertAtEnd(data) {
        const newNode = new Node(data);

        // If the list is empty, set the new node as the head
        if (!this.head) {
            this.head = newNode;
            return;
        }

        // Traverse to the end of the list
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        
        // Set the last node's `next` to the new node
        current.next = newNode;
    }


------------------Inser Node at Mid ----

To insert a node in the middle of a linked list in JavaScript, we need to define a function that will find the appropriate middle position and insert the new node there. Here’s an implementation that allows inserting at a specific position (index) in the list.

If the specified position is greater than the length of the list, the node will be inserted at the end.

-------------->
insertAtPosition:
                If position is 0 or less, the function inserts the node at the beginning.
                If position is greater than the current length of the list, it will simply add the node at the end.
                For positions within the list, it traverses until the target index and inserts the new node between previous and current nodes.
display:         Displays the entire list to show the final structure.


 // Insert a new node at a specified position
    insertAtPosition(data, position) {
        const newNode = new Node(data);

        // If the position is at the beginning or the list is empty
        if (position <= 0 || !this.head) {
            this.insertAtBeginning(data);
            return;
        }

        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        // Traverse the list to find the correct position
        while (current && currentIndex < position) {
            previous = current;
            current = current.next;
            currentIndex++;
        }

        // Insert the new node between previous and current nodes
        newNode.next = current;
        if (previous) {
            previous.next = newNode;
        }
    }

