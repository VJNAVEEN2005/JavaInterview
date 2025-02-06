class Node{
    constructor(val, left = null , right = null){
        this.val = val
        this.left = left
        this.right = right
    }
}

class BST {
    constructor(){
        this.root = null
    }
    add(val){
        const node = this.root
        if(node === null){
            this.root = new Node(val)
            return
        } else {
            const searchTree = function(node) {
                if(val < node.val){
                    if(node.left === null){
                        node.left = new Node(val)
                        return
                    } else if(node.left !== null) {
                        return searchTree(node.left)
                    }
                } else if (val > node.val){
                    if(node.right === null){
                        node.right = new Node(val)
                        return
                    } else if (node.right !== null){
                        return searchTree(node.right)
                    }
                } else {
                    return null
                }
            };
            return searchTree(node)
        }
    }
    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.val); // Print the value
            this.inOrderTraversal(node.right);
        }
    }
    preOrderTraversal(node = this.root) {
        if (node !== null) {
            console.log(node.val); // Print root first
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }
    
}

const graph = new BST()

graph.add(4)
graph.add(2)
graph.add(7)
graph.add(1)
graph.add(3)
graph.add(6)
graph.add(9)

graph.preOrderTraversal()

console.log('---------')

var invertTree = function(root) {
    
    if(root){
        [root.left,root.right] = [invertTree(root.right),invertTree(root.left)]
    }
    return root

};

const answer = invertTree(graph)
answer.preOrderTraversal()
