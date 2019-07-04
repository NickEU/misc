// Challenge URL : https://www.hackerrank.com/challenges/30-binary-search-trees/problem

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);    
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    // Start of function getHeight
    this.getHeight = function(root) {
      let heightFinal = 0;
      const goDeeper = (root, height) => {
          if (root.left) {
              goDeeper(root.left, height + 1);
          }
          if (root.right) {
              goDeeper(root.right, height + 1);
          }
          heightFinal = height > heightFinal ? height : heightFinal;
      };
      goDeeper(root, 0);     
      return heightFinal;        
    }; // End of function getHeight
}; // End of function BinarySearchTree


var tree = new BinarySearchTree();
var root = null;

var values = [3, 5, 2, 1, 4, 6, 7];

for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
}

console.log('Height of the tree = ' + tree.getHeight(root));
