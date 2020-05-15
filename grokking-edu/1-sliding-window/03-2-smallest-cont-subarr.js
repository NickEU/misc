'use strict';

// Given an array of positive numbers and a positive number ‘S’,
// find the length of the smallest contiguous subarray
// whose sum is greater than or equal to ‘S’.
// Return 0, if no such subarray exists.

const findSmallestSubarray = (arr, targetSum) => {
  let minLen = Infinity;
  let tempSum = 0,
    rightIdx = 0,
    leftIdx = 0;
  while (leftIdx < arr.length) {
    if (tempSum >= targetSum) {
      minLen = Math.min(minLen, rightIdx - leftIdx);
    } else {
      if (rightIdx < arr.length) {
        tempSum += arr[rightIdx];
      } else {
        break;
      }
      rightIdx++;
      continue;
    }
    tempSum -= arr[leftIdx];
    leftIdx++;
  }
  return minLen === Infinity ? 0 : minLen;
};


console.log('Testing findSmallestSubarray:\n');
console.log(findSmallestSubarray([3, 4, 1, 1, 6], 8) === 3);
console.log(findSmallestSubarray([2, 1, 5, 2, 8], 7) === 1);
console.log(findSmallestSubarray([2, 1, 5, 2, 3, 2], 7) === 2);
console.log(findSmallestSubarray([2, 1, 5, 2, 3, 2], 29) === 0);
