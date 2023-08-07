//Binary Search Tree

/***
 *      50
 *    17  72
 *  12  23 54 76
 * 9  12  19 67
 */

/** node class represents each node as tree */
class Node {
   constructor(data,left=null,right=null){
      this.data = data; // data saved in node
      this.left = left; // point to left node
      this.right = right; // point to right node
   }
}

class BST {

    constructor(){
      this.root = null;// root node which is on top of tree
    }

    add(data){
        const node = this.root;

        /** set node as root in tree */
        if(node === null){
            this.root = new Node(data);
            return;
        }else{
     /** this is not first node - root node. we will figure out where to place the node in the tree */
         const searchTree = function(node){
            if(data < node.data){
                if(node.left === null){
                    node.left = new Node(data);
                } else if(node.left !== null){
                    return searchTree(node.left);
                }
             } else if(data > node.data){
                if(node.right === null){
                    node.right = new Node(data);
                }else if(node.right !== null){
                    return searchTree(node.right);
                }
             } else{
                return null;
             }
         }

         return searchTree(node)
    }
    }

    findMin(){
        let current = this.root;
        while(current.left!== null){
            current = current.left;
        }
        return current.data;
    }
}

const bst = new BST();
bst.add(50);
bst.add(17);
bst.add(72);
bst.add(19);
bst.add(2);
bst.add(54);
bst.add(76);

console.log(bst.findMin())