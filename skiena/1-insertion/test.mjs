import sortArray from './insertion.mjs';

const testCases = [
  ['9115651994372122', '1111222345567999'],
  ['insertionsort', 'eiinnoorrsstt'],
  ['654321', '123456'],
];

runTestSuite(testCases, sortArray);

function runTestSuite(testCases, funcBeingTested) {
  console.log(`\nTesting ${funcBeingTested.name}:`);
  let allTestsPassed = true;

  testCases.forEach((test, i) => {
    if (!runTest(i + 1, test[0], test[1], funcBeingTested)) {
      allTestsPassed = false;
    }
  });

  if (allTestsPassed) {
    console.log('\x1b[32m', '\nAll tests have passed!');
  }
}

function runTest(testNumber, input, expectedOutput, funcBeingTested) {
  console.log('\x1b[0m', `\nRunning test #${testNumber}:\n`);
  console.log(`Input: ${input}`);

  const actualOutput = funcBeingTested(input);

  console.log(`Expected = ${expectedOutput}\nActual   = ${actualOutput}`);

  const isTestSuccessful = actualOutput == expectedOutput;
  const textColor = isTestSuccessful ? '\x1b[32m' : '\x1b[31m';

  console.log(
    textColor,
    `Test #${testNumber} has`,
    isTestSuccessful ? 'passed' : 'failed'
  );

  return isTestSuccessful;
}
