'use strict';

// Given an array of positive numbers and a positive number ‘S’,
// find the length of the smallest contiguous subarray
// whose sum is greater than or equal to ‘S’.
// Return 0, if no such subarray exists.

// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// The smallest subarray with a sum greater than or equal to '7' is [5, 2].

// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// The smallest subarray with a sum greater than or equal to '7' is [8].

// Input: [3, 4, 1, 1, 6], S=8
// Output: 3
// Smallest subarrays with a sum
// greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].

const helper = require('./02-2-cont-subarray-max-sum');

const findSmallestSubarray = (arr, sum) => {
  for (let i = 1; i < arr.length; i++) {
    const currMaxSum = helper.findMaxSum(arr, i);
    console.log(currMaxSum);
    if (currMaxSum >= sum) {
      return i;
    }
  }
  return 0;
};

console.log('Testing findSmallestSubarray:\n');
console.log(findSmallestSubarray([3, 4, 1, 1, 6], 8) === 3);
console.log(findSmallestSubarray([2, 1, 5, 2, 8], 7) === 1);
console.log(findSmallestSubarray([2, 1, 5, 2, 3, 2], 7) === 2);
console.log(findSmallestSubarray([2, 1, 5, 2, 3, 2], 29) === 0);
