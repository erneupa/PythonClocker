# PythonClocker

## Overview
**PythonClocker** is a browser extension designed to help programming students by challenging them to solve Python programming problems in order to stop an alarm. I created it as a fun way to motivate myself (and others) to practice Python.

---

## Documentation for Developers

### Project Structure

- `server.js`: The backend server that handles requests and manages the functionality of the extension.
- `background.js`: The background script that runs the logic for the extension, such as checking if the problem is solved.
- `manifest.json`: The configuration file that tells the browser how to load the extension.
- `assets/`: Folder containing images and other resources needed by the extension.

### Dependencies

- **Node.js**: Required to run the server locally.
- **Express**: A web framework for Node.js used to handle HTTP requests.
- **CORS**: A middleware for Express that handles cross-origin requests.
- **Node-fetch**: A lightweight library for making HTTP requests in Node.js.

### Installation for Developers

1. Clone the repository or download the ZIP file from [PythonClocker GitHub](https://github.com/erneupa/PythonClocker).
2. Open a terminal and navigate to the project folder.
3. Install the required dependencies by running:

    ```
    npm install node-fetch@2
    npm install express cors
    ```

4. After the dependencies are installed, run the server with:

    ```
    node server.js
    ```

5. You can now test the extension locally by loading it into your browser via the Extensions page (`chrome://extensions/`), enabling Developer Mode, and selecting "Load unpacked."

### API Key Configuration

1. Open the `server.js` file and replace `TU-APYKEY` with your actual API key.
2. Do the same in the `background.js` file where the key is also required.
3. The API key can typically be found in the Moodle files related to your project.

### How the Extension Works

The extension serves as an interactive alarm clock. It triggers an alarm that can only be turned off when the user solves a Python problem. This functionality makes it a fun and effective tool for practicing programming.

---

## Devlog (LinkedIn Post)

### **Devlog Entry #1: Initial Concept and Idea**

When I first started learning programming at the age of 18, I found Python to be both straightforward and frustrating at the same time. There were days when I felt motivated, and other days when the constant struggles made me want to give up. I wanted a solution that would keep me engaged while learning. That’s when I had the idea for **PythonClocker** — a browser extension that combines learning with a challenge. The alarm only stops when the user solves a Python problem. It was a way to combine motivation with fun.

### **Devlog Entry #2: Getting Started with the Extension**

The next step was deciding how to build the extension. I chose to use JavaScript for the browser extension, as it’s easy to work with for these kinds of projects. I started by creating the basic structure of the extension: a manifest file, background scripts, and simple HTML for the alarm functionality. Then, I moved on to setting up a basic server using **Node.js**, **Express**, and **CORS**. I wanted everything to run smoothly and locally, making sure I had a reliable setup.

### **Devlog Entry #3: Building the Server**

Once I had the basic extension running, I focused on the server. The server is essential for handling requests and managing the API that supplies the Python problems. I used **Node-fetch** to make HTTP requests and handle asynchronous tasks. Setting up the server was tricky, but once I got the hang of it, I was able to run the extension seamlessly on my local machine.

### **Devlog Entry #4: Debugging and Testing**

Debugging was one of the most challenging parts of this project. I needed to ensure that when the user solved the Python problem, the alarm would stop. At first, there were some issues with the API key and communication between the server and the extension, but I resolved them by carefully reviewing the logic in both `server.js` and `background.js`.

### **Devlog Entry #5: Final Touches and Deployment**

After weeks of testing, I finally had everything working as expected. The extension was running smoothly, and the Python problems were displayed correctly. I made some final adjustments to the user interface, ensuring everything looked neat. The next step was packaging the extension and preparing it for deployment.

I uploaded the project to GitHub, created a detailed README, and shared the extension with my friends for their feedback. It’s amazing to see the initial idea evolve into a functional tool that not only helps me but can also assist other students in their programming journey.

### **Devlog Entry #6: Reflection and Next Steps**

Looking back, this project was a great learning experience. I encountered a lot of obstacles, but each one helped me grow as a developer. The extension is now ready for use, and I’m planning to continue improving it based on user feedback. I’ve also started thinking about future features, like adding more types of programming challenges or integrating with other languages like JavaScript or C++.

This project was an excellent opportunity to dive deep into web development, Node.js, and the world of browser extensions. I’m excited to see where it goes next!

### **Devlog Final:**

I hope this devlog helps anyone who is looking to create their own browser extension or just wants to understand the process of turning an idea into reality. The key takeaway is that persistence pays off — even when things don’t work out at first. Keep coding, keep learning, and most importantly, keep having fun!

---


