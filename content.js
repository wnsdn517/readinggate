document.addEventListener('keydown', function(event) {
  console.log(`Key pressed: ${event.key}`);
  
  // Send key press to background script
  chrome.runtime.sendMessage({ key: event.key });
});
