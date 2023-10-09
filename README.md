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

1. Ensure the extension is installed in your Chrome browser.
2. While browsing, select any text containing an epoch value.
3. Press `Ctrl` and observe the extension in action, instantly converting the selected epoch value to human-readable format.

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