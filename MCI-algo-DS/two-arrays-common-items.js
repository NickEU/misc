// first for loop = O(N) Time O(N) space
// second for loop = O(M) Time O(1) space
// algo = O(N + M) Time O(N) space

function doesCommonElementExist(arr1, arr2) {
  let hashT = {};
  for (let i = 0; i < arr1.length; i++) {
    if (hashT[arr1[i]] === undefined) {
      hashT[arr1[i]] = true;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (hashT[arr2[i]]) {
      return true;
    }
  }
  return false;
}

console.log(doesCommonElementExist(["a", "b", "b", "c", "x"], ["z", "y", "i"]));
console.log(doesCommonElementExist(["a", "b", "c", "x"], ["z", "y", "x"]));
