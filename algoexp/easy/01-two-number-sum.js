'use strict';

// O(N*logN) Time O(1) Space
function twoNumbersExist(arr, targetSum) {
  const sortedArr = arr.sort((a, b) => a - b);
  console.log(sortedArr, targetSum);
  for (let i = 0, j = sortedArr.length - 1; j > i;) {
    const tempSum = sortedArr[i] + sortedArr[j];
    if (tempSum === targetSum) {
      return true;
    } else if (tempSum > targetSum) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

const arr1 = [5, 6, 25, 3, 7];
const arr2 = [-4, 15, 36, 3, -6, 0, 17, 25];

console.log(twoNumbersExist(arr1, 13)); // true
console.log(twoNumbersExist(arr1, 28)); // true
console.log(twoNumbersExist(arr2, -4)); // true
console.log(twoNumbersExist(arr2, 38)); // false
