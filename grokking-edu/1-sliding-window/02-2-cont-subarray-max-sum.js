'use strict';
// Given an array of positive numbers and a positive number ‘k’,
// find the maximum sum of any contiguous subarray of size ‘k’.

// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].

// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].


const findMaxSum = (arr, k) => {
  let maxSum = -Infinity;
  let tempSum = 0;
  let leftIdx = 0;
  for (let rightIdx = 0; rightIdx < arr.length; rightIdx++) {
    tempSum += arr[rightIdx];
    if (rightIdx >= k - 1) {
      maxSum = Math.max(maxSum, tempSum);
      tempSum -= arr[leftIdx];
      leftIdx++;
    }
  }

  return maxSum;
};

exports.findMaxSum = findMaxSum;

console.log(findMaxSum([2, 1, 5, 1, 3, 2], 3) === 9);
console.log(findMaxSum([2, 3, 4, 1, 5], 2) === 7);

