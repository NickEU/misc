'use strict';

// Given a string, find the length of the longest substring
// in it with no more than K distinct characters.

const findLongestSubstr = (inputStr, k) => {
  console.log(inputStr);
  const charCountDict = {};
  let maxSubStrLen = 0,
    currDistinctCharCount = 0;
  for (let leftIdx = 0,
    rightIdx = 0; rightIdx < inputStr.length; rightIdx++) {
    const incomingChar = inputStr[rightIdx];
    if (!charCountDict[incomingChar]) {
      charCountDict[incomingChar] = 1;
      currDistinctCharCount++;
    } else {
      charCountDict[incomingChar]++;
    }

    while (currDistinctCharCount > k) {
      const subtractChar = inputStr[leftIdx];
      leftIdx++;
      charCountDict[subtractChar]--;
      if (charCountDict[subtractChar] === 0) {
        currDistinctCharCount--;
      }
    }

    maxSubStrLen = Math.max(maxSubStrLen, rightIdx - leftIdx + 1);
  }
  return maxSubStrLen;
};

console.log(findLongestSubstr('araaci', 2) === 4);
console.log(findLongestSubstr('araaci', 1) === 2);
console.log(findLongestSubstr('cbbebi', 3) === 5);
