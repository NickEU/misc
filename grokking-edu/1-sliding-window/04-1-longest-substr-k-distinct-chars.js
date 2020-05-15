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
    const currChar = inputStr[rightIdx];
    if (!charCountDict[currChar]) {
      charCountDict[currChar] = 1;
      currDistinctCharCount++;
    } else {
      charCountDict[currChar]++;
    }

    while (currDistinctCharCount > k) {
      const subtractChar = inputStr[leftIdx];
      if (charCountDict[subtractChar] === 1) {
        currDistinctCharCount--;
      }
      leftIdx++;
      charCountDict[subtractChar]--;
    }

    maxSubStrLen = Math.max(maxSubStrLen, rightIdx - leftIdx + 1);
  }
  return maxSubStrLen;
};

console.log(findLongestSubstr('araaci', 2) === 4);
console.log(findLongestSubstr('araaci', 1) === 2);
console.log(findLongestSubstr('cbbebi', 3) === 5);
