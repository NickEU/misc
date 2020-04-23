'use strict';
// input : a string representing the tree as described below:

// The values in the string are in the order of level order traversal
// of the tree where, numbers denote node values,
// and a character “N” denotes NULL child.

// Given a BST with N nodes and a target node K.
// The task is to find an integer having minimum absolute difference
// with given target value K and return this difference.

// another version, looks messy but uses O(1) space
const findClosestValue = (BST, target) => {
  let minDifference = Infinity;
  for (let i = 0; i < BST.length; i += 2) {
    if (BST[i] === 'N') {
      continue;
    }
    let number = BST[i];
    if (BST[i + 1] !== ' ') {
      do {
        i++;
        number += BST[i];
        if (i >= BST.length) {
          break;
        }
      } while (BST[i + 1] !== ' ');
    }
    const newDifference = target - number;
    if (newDifference === 0) {
      return 0;
    }
    if (newDifference < minDifference) {
      minDifference = newDifference;
    }
  }
  return minDifference;
};

const tree1 = '01 2 11 1 5 N N N N 3 6 N 4';
console.log(findClosestValue(tree1, 13));

const tree2 = '8 1 9 N 4 N 10 3';
console.log(findClosestValue(tree2, 9));
