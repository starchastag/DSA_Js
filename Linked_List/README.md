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


               INSERT NODE : Javascript 
            
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
