function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  let arr1Len = arr1.length;
  let arr2Len = arr2.length;

  while (i < arr1Len || j < arr2Len) {
    //console.log(i, j);
    if (i < arr1Len && (j >= arr2Len || arr1[i] <= arr2[j])) {
      result.push(arr1[i]);
      i++;
    } else if (j < arr2Len) {
      result.push(arr2[j]);
      j++;
    }
  }

  return result;
}
let array1 = [0, 3, 4, 31];
let array2 = [4, 6, 30];
console.log(`The result of merging of ${array1} with ${array2} :`);
console.log(mergeSortedArrays(array1, array2));
