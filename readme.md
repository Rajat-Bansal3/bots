# Game Bots in JavaScript

Welcome to the Game Bots repository! This repository contains a collection of bots for various games implemented in JavaScript.

## Overview

This project aims to provide bots for popular games to automate certain tasks or provide assistance to players. Each bot is designed specifically for a particular game and may have different functionalities based on the game's mechanics.

## Supported Games

- **Game: Eye Test**
  - **Description:** The game presents squares within a larger square, each with a single color. The smaller squares have a slightly different shade of the same color. Clicking on these smaller squares increases your score and reveals new squares with different colors. The game lasts for 60 seconds.
  - **Bot Name:** EyeTestPuppeteerBot
    - **Description:** This bot automates playing the Eye Test game by clicking on squares with different shades to increase the score within the 60-second duration.
    - **Usage:** To use this bot, ensure you have Node.js installed on your system. Then, install the required dependencies using `npm install puppeteer`. After that, run the provided script using `node eyeTest.js`.
    - **Dependencies:**
      - [Puppeteer](https://github.com/puppeteer/puppeteer): Puppeteer is a Node library that provides a high-level API over the Chrome DevTools Protocol, which allows you to control Chrome or Chromium browsers.

## Getting Started

To use the bots in this repository, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Rajat-Bansal3/bots
    ```

2. **Install dependencies**:

    ```bash
    cd bots
    npm install
    ```

    If you are on a Linux environment and installed Node.js via snap, you might face some issues. Therefore, consider installing it as follows (curling a deb repo of Node from a trusted source and installing it):

    ```bash
    sudo apt-get update && sudo apt-get install -y ca-certificates curl gnupg

    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
    NODE_MAJOR=20
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
    sudo apt-get update && sudo apt-get install nodejs -y

    Then just link your folders like for me it was like `ln usr/bin/node /snap/bin/node`
    ```

3. **Choose the bot**:

    Choose the bot for the game you want to play and follow the instructions provided in the respective section of the documentation.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. **Fork the repository** and clone it to your local machine.
2. **Create a new branch** for your feature or bug fix: `git checkout -b feature-name`.
3. **Make your changes** and test them thoroughly.
4. **Commit your changes**: `git commit -am 'Add new feature'`.
5. **Push to the branch**: `git push origin feature-name`.
6. **Submit a pull request** detailing your changes.


## Contact

For any questions or feedback, feel free to reach out to Rajat Bansal at [rajatbansal28082003@gmail.com].
