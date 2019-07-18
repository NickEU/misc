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

    this.getLevelOrder = (root) => {
        objArray = [];
        const traverseTree = (root, level) => {
            objArray.push({ level: level, data: root.data });
            if (root.left) {
                traverseTree(root.left, level + 1);
            }
            if (root.right) {
                traverseTree(root.right, level + 1);
            }
        }

        traverseTree(root, 0);
        console.log(objArray.map((item) => item.data));
        objArray = objArray.map((item, id) => {
          return { position: id , ...item}
        })
        objArray.sort((a, b) => {
          if (a.level === b.level) {
            return a.position - b.position;
          }
          return a.level - b.level
        });

        // doesn't work with array.sort((a,b) => a - b) because it's not a stable 
        // sorting algo, more info here:
        // https://stackoverflow.com/questions/1427608/fast-stable-sorting-algorithm-implementation-in-javascript

        console.log(objArray.map((item) => item.data));

        let result = objArray.map((item) => item.data);

        console.log(result.join(' '));
    }
}; // End of function BinarySearchTree


var tree = new BinarySearchTree();
var root = null;

//var values = [ 6, 5, 2, 1, 4, 6, 7];
var values = [13,25,39,12,19,9,23,55,31,60,35,41,70,90];
for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
}

console.log(root);
console.log('LevelOrder of the tree = ');
tree.getLevelOrder(root);
