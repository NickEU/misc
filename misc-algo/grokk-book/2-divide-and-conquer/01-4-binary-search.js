'use strict';

const findNumber = (arr, targetNumber) => {
  if (typeof targetNumber !== 'number') {
    return null;
  }

  if (arr.length === 1) {
    if (arr[0] === targetNumber) {
      return `Found the number: ${arr[0]}`;
    } else {
      return `Couldn't find the number: ${targetNumber}`;
    }
  }

  const cutOff = Math.floor(arr.length / 2);
  const newArr = arr[cutOff] > targetNumber ?
    arr.slice(0, cutOff) : arr.slice(cutOff);

  return findNumber(newArr, targetNumber);

};

const testArr = [...Array(50).keys()].map(x => ++x);
console.log(findNumber(testArr, 18));
console.log(findNumber(testArr, 27));
console.log(findNumber(testArr, 50));
console.log(findNumber(testArr, 0));
console.log(findNumber(testArr, -5));
