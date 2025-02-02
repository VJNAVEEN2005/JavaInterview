class Node {
    constructor(data) {
        this.data = data; // value stored in the node
        this.next = null; // Pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Points the starting node
    }

    append(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;

        while(current.next){
            current = current.next;
        }

        current.next = newNode;
    }

    printList(data){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

const list = new LinkedList()

list.append(2)
list.append(3)
list.append(4)

list.printList()