div_id = "wooord-trans";
icon_class = "wooord-trans-icon";

function getSelectedText() {
  str = "";
  if (window.getSelection && window.getSelection().toString().length > 0) {
    str = window.getSelection().toString();
  }
  return str;
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message != "getSelectedText") return;
  responseObject = {
    sender: "content_script.js"
  };
  responseObject.message = getSelectedText();
  console.log(`1`, sender);
  sendResponse(responseObject);
});

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("test");
});

document.addEventListener("DOMContentLoaded", addListen, false);

function addListen() {
  document.addEventListener("mousemove", e => {
    // let storage = chrome.storage.local;
    // storage.set({ event: JSON.stringify(e) }, function() {
    //   console.log("Value is set to " + value);
    // });

    chrome.tabs.executeScript(
      null,
      {
        code: "let event = " + JSON.stringify(e)
      },
      function() {
        chrome.tabs.executeScript(null, { file: "move.js" });
      }
    );
    // chrome.tabs.executeScript(null, {
    //   code: "onMouseMove(e)"
    // });
    // chrome.tabs.executeScript(null, {
    //   code: "console.log(e)"
    // });
  });
}

function onMouseMove(e) {
  console.log(e);
}
