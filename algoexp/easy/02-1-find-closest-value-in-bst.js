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
    while (BST[i + 1] !== ' ') {
      i++;
      number += BST[i];
      if (i >= BST.length) {
        break;
      }
    }
    const newDifference = Math.abs(target - number);
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

const tree3 = '8 1 6 N 4 N 15 3';
console.log(findClosestValue(tree3, 14));
