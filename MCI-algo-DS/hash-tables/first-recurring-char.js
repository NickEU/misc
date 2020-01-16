function findFirstRecurringChar(arr) {
  console.log(arr);
  const hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    if (hashTable[arr[i]]) {
      console.log(`First recurring char is: ${arr[i]}`);
      console.log(hashTable);
      return arr[i];
    }
    hashTable[arr[i]] = arr[i];
  }
  console.log(`No recurring characters found!`);
  //console.log(hashTable)
}

console.log(findFirstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]) === 2);
console.log(findFirstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4]) === 1);
console.log(findFirstRecurringChar([2, 3, 4, 5]) === undefined);
console.log(findFirstRecurringChar([2, 5, 5, 2, 3, 5, 1, 2, 4]) === 5);
