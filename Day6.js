// Inverting Binary Tree

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

    // JUST FOR VISUALISING 
    printTree(root = this.root) {
        if (!root) return;

        const levels = [];
        const queue = [{ node: root, depth: 0, pos: 0 }];

        while (queue.length) {
            const { node, depth, pos } = queue.shift();
            if (!levels[depth]) levels[depth] = [];
            levels[depth].push({ val: node.val, pos });

            if (node.left) queue.push({ node: node.left, depth: depth + 1, pos: pos * 2 });
            if (node.right) queue.push({ node: node.right, depth: depth + 1, pos: pos * 2 + 1 });
        }

        // Display formatted tree
        const maxWidth = Math.pow(2, levels.length) * 3;
        levels.forEach((level, index) => {
            let line = "".padStart(maxWidth / 2 ** (index + 1), " ");
            let connectors = "".padStart(maxWidth / 2 ** (index + 1), " ");

            level.forEach(({ val, pos }, i) => {
                const spaceBetween = maxWidth / 2 ** index;
                line += `${val}`.padStart(spaceBetween - 1, " ") + " ";
                if (index < levels.length - 1) {
                    const leftChildExists = levels[index + 1].some((n) => n.pos === pos * 2);
                    const rightChildExists = levels[index + 1].some((n) => n.pos === pos * 2 + 1);
                    connectors +=
                        (leftChildExists ? "/" : " ").padStart(spaceBetween / 2, " ") +
                        (rightChildExists ? "\\" : " ").padEnd(spaceBetween / 2, " ");
                }
            });

            console.log(line);
            if (index < levels.length - 1) console.log(connectors);
        });
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

graph.printTree()

console.log('---------')

// MAin code

var invertTree = function(root) {
    
    if(root){
        [root.left,root.right] = [invertTree(root.right),invertTree(root.left)]
    }
    return root

};

graph.root = invertTree(graph.root)
graph.printTree()
