//binary search trees are ordered and only have two brances for ever node
//each left sub tree is less than or equal to parent node
//each right sub tree is greater than or equal to parent node

class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left; //point to left node
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    add(data){
        const node = this.root;
        if(node ===null){
            this.root = new Node(data);
            return;
        } else {
           
            //recursive function/search tree
            const searchTree = function(node){
                if(data < node.data){ //left side then
                    if(node.left === null){
                        node.left = new Node(data); 
                        return;
                    } else if(node.left !== null){
                        return searchTree(node.left);
                    }
                } else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    } else if(node.right !== null){
                        return searchTree(node.right);
                    }
                } else{
                    return null;
                }
            };
        return searchTree(node);
        }
    }

    //findmin by travelingall theway down the left of tree
    findMin(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data;
    }

    findMax(){
        let current = this.root;
        while(current.right !== null){
            current = current.right;
        }
        return current.data;
    }

    find(data){
        let current = this.root;
        while(current.data !== data){
            if(data < current.data){
                current = current.left;
            } else {
                current = current.right;
            }
            if(current === null){
                return null;
            }
        }
        return current;
    }

    isPresent(data){
        let current = this.root;
        while(current){
            if(data === current.data){
                return true;
            }
            if(data < current.data){
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    remove(data){
        const removeNode = function(node, data){
            if(node == null){
                return null;
            }
            if(data == node.data){
                //node has no children!
                if(node.left == null && node.righ == null){
                    return null;
                }
                //has no left child
                if(node.left == null){
                    return node.right;
                }
                //has no right child
                if(node.right == null){
                    return node.left;
                }
                var tempNode = node.right;
                while(tempNode.left !== null){
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.left, data);
                return node;
            } else{
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
}

//testing out our data structure
const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(1);
bst.add(3);
bst.add(6);
bst.add(5);
bst.add(7);

bst.remove(6);
console.log(bst.findMax);
console.log(bst.findMin);
console.log(bst.findMax);
console.log(bst.isPresent(6));
console.log(bst.isPresent(2));