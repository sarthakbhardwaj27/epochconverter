# Epoch Converter Chrome Extension

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Description

The Epoch Converter Chrome Extension is a lightweight tool designed to convert selected epoch values to a human-readable format with ease. The extension seamlessly integrates with your browser, providing a convenient way to interpret epoch timestamps directly from your web pages.

## Usage
Once you've included the JavaScript code in your HTML, the project is ready for use. To utilize the functionality, follow these steps:

1. **Select Text:** Highlight or select a piece of text that contains a Unix epoch timestamp (e.g., 1633939200) within your web page.

2. **Conversion Trigger:** While holding the Ctrl key, if the selected text contains a numeric value greater than or equal to 10 characters, the conversion will be triggered.

3. **Info Tooltip:** After triggering the conversion, an information tooltip will appear at the mouse cursor's position, displaying the UTC format of the Unix epoch timestamp.

4. **Conversion Output:** The tooltip will display the UTC format of the Unix epoch timestamp and remain visible for 3 seconds.

## Functions
This project includes the following JavaScript functions:

1. **convertEpochToHumanReadable(epoch):** Converts a Unix epoch timestamp to a human-readable date and time in the IST time zone (GMT+5:30).

2. **convertEpochToUTC(epoch):** Converts a Unix epoch timestamp to a UTC format string.

3. **showInfoTooltip(text, x, y):** Displays an informative tooltip with the specified text at the given (x, y) coordinates on the web page.

4. **helper(event):** An event listener that listens for mouseup events on the web page. When the Ctrl key is held, it checks if the selected text contains a valid Unix epoch timestamp and triggers the conversion and tooltip display.

## How It Works

The extension consists of two essential components:

1. **Content Script (`content.js`):**
   - This JavaScript file contains the logic for converting epoch values. It listens for the `mouseup` event and checks if the `Ctrl` key is pressed.
   - If the `Ctrl` key is detected, the script retrieves the selected text, verifies it has more than 10 characters, and converts the epoch value to a human-readable format.
   - The result is displayed using an alert for simplicity.

2. **Manifest File (`manifest.json`):**
   - The manifest file provides metadata about the extension, including its name, version, and description.
   - It specifies the permissions needed (in this case, `activeTab`) and defines a content script that runs on all URLs.

## Installation

1. Clone this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right.
4. Click "Load unpacked" and select the folder containing the extension files.

## Contributing

Contributions are welcome! If you have ideas for improvements or encounter issues, please open an [issue](link-to-issues) or submit a [pull request](link-to-pull-requests).

## Upcoming Features
1. **Text Selection:** The code now works seamlessly on selected text. - Done
2. **Chrome Extension:** Transforming the tool into a Chrome extension for enhanced usability. - Done
3. **UI Enhancement:** Replace the alert with a sleek dialogue box next to the selected text for a more refined user interface.

## Note
index.html and script.js are just for testing purpose and are not related to the chrome extension

## Improvements:
Improving a project can involve various aspects, including functionality, user experience, code structure, and additional features. Here are some suggestions to enhance this Epoch Converter Chrome Extension:

1. **User Interface (UI) Enhancement:**
   - Instead of using an alert, consider creating a more visually appealing and user-friendly interface for displaying the converted date and time. You could create a small tooltip or a custom popup next to the selected text.
   - Add styling to make the user interface more aesthetically pleasing.

2. **Options Page:**
   - Create an options page for your extension that allows users to customize certain settings, such as the date and time format, or enable/disable certain features.

3. **Internationalization (i18n):**
   - If you plan to make your extension available to a global audience, consider adding internationalization support to allow for translations into different languages.

4. **Error Handling:**
   - Implement robust error handling to gracefully handle unexpected situations, providing clear feedback to the user in case of errors.

5. **Performance Optimization:**
   - Optimize the performance of your extension. Depending on the complexity, you might want to consider asynchronous loading or lazy loading of resources.

6. **Context Menu Integration:**
   - Instead of relying on `Ctrl` key and `mouseup`, consider integrating your extension with the browser's context menu. This way, users can right-click on the selected text and choose an option to convert epoch values.

7. **Testing:**
   - Expand your testing scenarios to cover different websites and edge cases. Ensure that your extension works seamlessly across various web pages and with different types of text selections.

8. **Documentation:**
   - Enhance the README documentation. Provide detailed information on how to use the extension, its features, and any configuration options. Include examples and clear instructions for potential contributors.

9. **Code Refactoring:**
   - Review your code and look for opportunities to refactor or optimize. Consider organizing your code into modules or classes for better maintainability.

10. **Security Considerations:**
   - Ensure that your extension follows security best practices. Sanitize user inputs, avoid the use of `eval` or other potentially unsafe functions, and follow Chrome's security guidelines.

11. **Bug Fixes:**
   - Address any reported bugs or issues. Monitor feedback from users and the community to identify areas that need improvement.
