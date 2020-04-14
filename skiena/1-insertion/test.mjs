import sortArray from './insertion.mjs';

runTestSuite();

function runTestSuite() {
  const testCases = [
    ['9115651994372122', '1111222345567999'],
    ['insertionsort', 'eiinnoorrsstt'],
    ['654321', '123456'],
  ];

  const testResults = testCases.map((test, i) =>
    runTest(i + 1, test[0], test[1])
  );

  if (!testResults.some((result) => !result)) {
    console.log('All tests have passed!');
  }
}

function runTest(testNumber, input, expectedOutput) {
  console.log(`Running test #${testNumber}:`);

  const actualOutput = sortArray(input);
  const isTestSuccesful = actualOutput == expectedOutput;

  console.log(`Test #${testNumber} has`, isTestSuccesful ? 'passed' : 'failed');

  return isTestSuccesful;
}
