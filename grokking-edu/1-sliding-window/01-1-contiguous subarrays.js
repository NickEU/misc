'use strict';
// Given an array,
// find the average of all contiguous subarrays of size ‘K’ in it.

// input : array of numbers, size K
// output: array of averages of all contiguous subarrays of size K

const findAverages = (arr, k) => {
  const result = [];
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    result.push(sum / k);
  }
  return result;
};

console.log(findAverages([1, 2, 3, 4, 5, 6], 4));
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
