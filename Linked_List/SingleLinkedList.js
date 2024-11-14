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
    insert(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Display the linked list
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
}

// Usage
const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);

console.log("Linked List:");
list.display();
