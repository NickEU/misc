import runTestSuite from './test.mjs';

const testCases = [
  ['9115651994372122', '1111222345567999'],
  ['insertionsort', 'eiinnoorrsstt'],
  ['654321', '123456'],
];

runTestSuite(testCases, sortString);
// inplace sorting
function sortString(str) {
  let result = str.split('');
  for (let i = 1; i < result.length; i++) {
    let j = i - 1;
    while (j >= 0) {
      if (result[i] >= result[j]) {
        relocateElInsideArray(result, i, j + 1);
        break;
      } else if (j === 0) {
        relocateElInsideArray(result, i, j);
      }
      j--;
    }
  }

  return result.join('');
}

function relocateElInsideArray(arr, sourceIndex, targetIndex) {
  let elInserted = arr[sourceIndex];
  arr.splice(sourceIndex, 1);
  arr.splice(targetIndex, 0, elInserted);
}
