'use strict';
// Given an array,
// find the average of all contiguous subarrays of size ‘K’ in it.

// input : array of numbers, size K
// output: array of averages of all contiguous subarrays of size K

const findAverages = (arr, k) => {
  const result = [];
  let tempSum = arr.slice(0, k).reduce((acc, val) => acc + val);
  result.push(tempSum / k);
  for (let i = k; i < arr.length; i++) {
    tempSum += arr[i] - arr[i - k];
    result.push(tempSum / k);
  }
  return result;
};

console.log(findAverages([1, 2, 3, 4, 5, 6], 4));
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
