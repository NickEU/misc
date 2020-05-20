function getRandomInt(min, max) {
    // inclusive: min <= result <= max
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const quickSort = (arr) => {
    if(arr.length < 2) {
        return arr;
    }
    if (arr.length === 2) {
        return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    }
    const pivotIdx = getRandomInt(0, arr.length - 1);
    const pivot = arr[pivotIdx],
        smallerThanPivot = [],
        largerThanPivot = [];
    
    for(let i = 0; i < arr.length; i++) {
        if (i === pivotIdx) {
            continue;
        }
        const currEl = arr[i];
        if (currEl <= pivot) {
            smallerThanPivot.push(currEl);
        } else {
            largerThanPivot.push(currEl);
        }
    }
    return [...quickSort(smallerThanPivot), pivot, ...quickSort(largerThanPivot)];
};

const exampleArr = [...Array(50).keys()].reverse();
console.log(quickSort(exampleArr));
console.log(quickSort([1, 3, 5, 4, 2]));
console.log(quickSort([10, 5, 2, 3]));