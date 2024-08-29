chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.key === 'ArrowRight') {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      func: clickRightArrow
    }).catch(handleError);
  } else if (message.key === 'ArrowLeft') {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      func: clickLeftArrow
    }).catch(handleError);
  }
});

function clickLeftArrow() {
  const leftArrowButton = document.querySelector('._left_arrow_tgkc0_439 button');
  if (leftArrowButton) {
    leftArrowButton.click();
    console.log('Left arrow clicked');
  }
}

function clickRightArrow() {
  const rightArrowButton = document.querySelector('._right_arrow_tgkc0_440 button');
  if (rightArrowButton) {
    rightArrowButton.click();
    console.log('Right arrow clicked');
  }
}

function handleError(error) {
  console.error('Error:', error);
  // Inject a script to display a refresh prompt
  chrome.scripting.executeScript({
    target: { tabId: sender.tab.id },
    func: showRefreshPrompt
  });
}

function showRefreshPrompt() {
  if (confirm('An error occurred while processing your request. Would you like to refresh the page?')) {
    location.reload();
  }
}
