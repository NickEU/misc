function sortString(str) {
  console.log(`Input: ${str}`);
  let result = sortArray(str.split(''));
  console.log(`Output: ${result}`);
}

function sortArray(arr) {
  let result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    while (j >= 0) {
      //console.log(`j = ${j}, ${result}`);
      //console.log(result[j], arr[i]);
      if (result[j] <= arr[i]) {
        result.splice(j + 1, 0, arr[i]);
        //console.log(`inserted ${arr[i]} = ${result}`);
        break;
      } else if (j == 0) {
        result.unshift(arr[i]);
      }
      j--;
    }
  }
  return result.join('');
}

export default sortArray;
