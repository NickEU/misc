import sortArray from './insertion.mjs';

const testCases = [
  ['9115651994372122', '1111222345567999'],
  ['insertionsort', 'eiinnoorrsstt'],
  ['654321', '123456'],
];

runTestSuite(testCases);

function runTestSuite(testCases) {
  let allTestsPassed = true;

  testCases.forEach((test, i) => {
    if (!runTest(i + 1, test[0], test[1])) {
      allTestsPassed = false;
    }
  });

  if (allTestsPassed) {
    console.log('All tests have passed!');
  }
}

function runTest(testNumber, input, expectedOutput) {
  console.log(`Running test #${testNumber}:`);
  console.log(`Input: ${input}`);

  const actualOutput = sortArray(input);

  console.log(`Expected = ${expectedOutput}\nActual = ${actualOutput}`);
  const isTestSuccesful = actualOutput == expectedOutput;

  console.log(`Test #${testNumber} has`, isTestSuccesful ? 'passed' : 'failed');

  return isTestSuccesful;
}
