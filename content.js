function convertEpochToHumanReadable(epoch) {
    // const date = new Date(epoch * 1000);
    // return date.toString();
    // Adjust the time zone offset for IST (GMT+5:30)
    const offset = 330; // 5 hours and 30 minutes in minutes
    date.setMinutes(date.getMinutes() + offset);

    return date.toString();
  }
  
  function helper(event) {
  
    if (event.ctrlKey) {
      const selection = window.getSelection().toString().trim();
  
      // Trigger conversion only if the selection has more than 10 characters
      if (selection.length >= 10) {
        const epochValue = parseInt(selection, 10);
  
        if (!isNaN(epochValue)) {
          alert(`Human Readable: ${convertEpochToHumanReadable(epochValue)}`);
        }
      }
    }
  }
  
  document.addEventListener("mouseup", helper);
  