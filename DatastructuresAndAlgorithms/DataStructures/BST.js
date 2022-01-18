class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1
    }

    size(){
        return this.count;
    }

    insert(value){
        this.count++;
        const newNode = new Node(value);
        const searchTree = (node) => {
            if(value < node.value){
                if(!node.left){
                    node.left = newNode;
                }else {
                    searchTree(node.left);
                }
            }

            if(value > node.value){
                if(!node.right){
                    node.right = newNode;
                }else {
                    searchTree(node.right);
                }
            }
        }
        searchTree(this.root);
    }

    contains(value){
        let currentNode = this.root;

        while(currentNode){
            if(currentNode.value === value){
                return true;
            }
            if(value < currentNode.value){
                currentNode = currentNode.left;
            }else {
                currentNode = currentNode.right
            }
        }

        return false;

    }

    min(){
        let currentNode = this.root;
        while(currentNode.left){
            if(currentNode) currentNode = currentNode.left
        }
        return currentNode.value;
    }

    max(){
        let currentNode = this.root;
        while(currentNode.right){
            if(currentNode) currentNode = currentNode.right
        }
        return currentNode.value;
    }

    // left, root, right
    // 2,3,12,15,28,36,39
    dfsInOrder(){
        let result = [];
        const traverse = (node) => {
            if(node.left) traverse(node.left);

            result.push(node.value);

            if(node.right) traverse(node.right);
        };
        traverse(this.root);
        return result;
    }

    bfs(){
        let result = [];
        let queue = [];
        queue.push(this.root);
        while(queue.length > 0){
            let currentNode = queue.shift();
            result.push(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
        return result;
    }
}

const bst = new BST(15);
bst.insert(3);
bst.insert(36);
// bst.insert(2);
// bst.insert(12);
// bst.insert(28);
// bst.insert(39);

bst.size();

console.log( 'BST Tree',  bst);
console.log('BST Size',bst.size());
console.log('BST min', bst.min());
console.log('BST max', bst.max());
console.log('contains', bst.contains(3))
console.log('contains', bst.contains(7))
console.log('bfs dfs InOrder', bst.dfsInOrder())
console.log('bfs', bst.bfs())
