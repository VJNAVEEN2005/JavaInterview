// Merge Two Sorted Lists

class Node {
    constructor(data) {
        this.val = data; // value stored in the node
        this.next = null; // Pointer to the next node
    }
}

class ListNode {
    constructor() {
        this.head = null; // Points the starting node
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    printList(data) {
        let current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }
}

const list1 = new ListNode()
const list2 = new ListNode()
list1.append(1)
list1.append(2)
list1.append(3)
list2.append(1)
list2.append(3)
list2.append(4)

list1.printList()
console.log("-----")
list2.printList()


var mergeTwoLists = function (list1, list2) {


    let list = new ListNode()
    let current1 = list1.head 
    let current2 = list2.head 

    while (current1 && current2) {
        if (current1.val <= current2.val) {
            list.append(current1.val)
            current1 = current1.next
        } else {
            list.append(current2.val)
            current2 = current2.next
        }
    }

    while (current2) {
        list.append(current2.val)
        current2 = current2.next
    }

    while (current1) {
        list.append(current1.val)
        current1 = current1.next
    }

    return list

}

const answer = mergeTwoLists(list1,list2)

console.log("------")

answer.printList()

