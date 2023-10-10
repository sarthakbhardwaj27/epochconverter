function convertEpochToHumanReadable(epoch) {
  try {
    const date = new Date(epoch * 1000);

    // Adjust the time zone offset for IST (GMT+5:30)
    const offset = 330; // 5 hours and 30 minutes in minutes
    date.setMinutes(date.getMinutes() + offset);

    return date.toString();
  } catch (error) {
    console.error("Error converting epoch to human-readable:", error.message);
    return "Invalid date";
  }
}

function convertEpochToUTC(epoch) {
  try {
    const date = new Date(epoch * 1000);
    const utcString = date.toISOString();
    return utcString;
  } catch (error) {
    console.error("Error converting epoch to UTC:", error.message);
    return "Invalid date";
  }
}

function showInfoTooltip(text, x, y) {
  const tooltip = document.createElement("div");
  tooltip.className = "info-tooltip";
  tooltip.textContent = text;

  tooltip.style.position = "absolute";
  tooltip.style.left = `${x-75}px`;
  tooltip.style.top = `${y-65}px`;
  tooltip.style.padding = "5px";
  tooltip.style.backgroundColor = "#f5f5f5";
  tooltip.style.border = "1px solid #dcdcdc";
  tooltip.style.padding = "5px";
  tooltip.style.color = "#333333";

  document.body.appendChild(tooltip);

  setTimeout(() => {
    document.body.removeChild(tooltip);
  }, 3000); // Remove the tooltip after 3 seconds
}

function helper(event) {
  if (event.ctrlKey) {
    const selection = window.getSelection().toString().trim();

    // Trigger conversion only if the selection has more than 10 characters
    if (selection.length >= 10) {
      const epochValue = parseInt(selection, 10);

      if (!isNaN(epochValue)) {
        const humanReadable = convertEpochToHumanReadable(epochValue);
        const utcValue = convertEpochToUTC(epochValue);

        const mouseX = event.pageX;
        const mouseY = event.pageY;

        showInfoTooltip(`UTC: ${utcValue}`, mouseX, mouseY);
      }
    }
  }
}

document.addEventListener("mouseup", helper);
