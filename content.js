function convertEpochToHumanReadable(epoch) {
  const date = new Date(epoch * 1000);
  return date.toString();
}

function helper(event) {
    if (event.ctrlKey) {
        const selection = window.getSelection().toString().trim();
    
        // Trigger conversion only if the selection has more than 10 characters
        if (selection.length > 10) {
          const epochValue = parseInt(selection, 10);
    
          if (!isNaN(epochValue)) {
            alert(`Human Readable: ${convertEpochToHumanReadable(epochValue)}`);
          }
        }
      }
}

document.addEventListener("mouseup", helper);
