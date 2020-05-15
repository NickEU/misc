'use strict';

const sumAllElements = numbers => {
  if (numbers.length === 1) {
    return numbers[0];
  }

  return numbers[0] + sumAllElements(numbers.slice(1));
};

console.log(sumAllElements([1, 2, 3, 4, 5]) === 15);
