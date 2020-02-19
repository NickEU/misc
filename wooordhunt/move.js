function onExecuted(result) {
  console.log(`We made it green`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

document.body.style.backgroundColor = "red";
// console.log(chrome.storage);
// chrome.storage.local.get(["event"], function(result) {
//   console.log("Value currently is " + result.event);
// });
console.log(event);
// const makeItGreen = 'document.body.style.border = "5px solid green"';

// const executing = browser.tabs.executeScript({
//   code: makeItGreen
// });

// executing.then(onExecuted, onError);
