var containerID = "container";
var sendMessageButtonID = "send_message";

function logSuccess(task) {
  console.log("%s Successful!", task);
  chrome.browserAction.setBadgeText({ text: localStorage.length.toString() });
}

function popup(word) {
  link = "http://paragraph77.net/word/" + word;
  $.magnificPopup.open({
    items: {
      src: link,
      type: "iframe"
    },
    alignTop: true
  });
  $(".mfp-content").css("height", "100%");
  $(".mfp-wrap").css("overflow", "hidden");
}

function responseCallback(responseObject) {
  if (responseObject) popup(responseObject.message);
}

document.addEventListener("DOMContentLoaded", function(dcle) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "getSelectedText", responseCallback);
  });
});
