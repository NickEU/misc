'use strict';

const findMaxElement = arr => {
  if (arr.length === 1) {
    return arr[0];
  }
  return Math.max(arr[0], findMaxElement(arr.slice(1)));
};

console.log(findMaxElement([5, 8, -2, 7, 13, 4]));
