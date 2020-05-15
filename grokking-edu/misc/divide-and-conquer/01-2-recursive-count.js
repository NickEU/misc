'use strict';

const countElements = numbers => {
  if (numbers.length === 1) {
    return 1;
  }
  return countElements(numbers.slice(1)) + 1;
};

console.log(countElements([1, 2, 3, 4, 5]) === 5);
