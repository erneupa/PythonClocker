Aarón Neupaver Montiel

<h2 align="center">🌐 Other Languages</h2>

<p align="center">
  <a href="https://github.com/erneupa/PythonClocker/blob/main/Languages/Spanish/README.md">
    🇪🇸 <strong>Spanish</strong>
  </a> &nbsp;·&nbsp;
  <a href="https://github.com/erneupa/PythonClocker/blob/main/Languages/French/README.md">
    🇫🇷 <strong>French</strong>
  </a> &nbsp;·&nbsp;
  <a href="https://github.com/erneupa/PythonClocker/blob/main/Languages/Japanese/README.md">
    🇯🇵 <strong>Japanese</strong>
  </a>
</p>


<h1 align="center">⏰ PythonClocker</h1>

<p align="center">
  <em>Because sometimes the only way to learn Python... is to wake up with it.</em>
</p>

<p align="center">
  This idea originated when an 18-year-old boy started studying programming.<br>
  Everything was great, but... Python, that interpreted language, sometimes easy,<br>
  but other times a complete nightmare.<br><br>
  <strong>So here is your solution!!</strong><br>
  This browser extension will save your subject — an alarm clock that you can only stop by solving the program.
</p>

---

<p align="center">
  <a href="https://chromewebstore.google.com/detail/kobehbnioildglecmfabpelnjnemihpn?utm_source=item-share-cb">
    <img src="https://img.shields.io/badge/🚀 Demo-PythonClocker-blue?style=for-the-badge" alt="Demo">
  </a>
  &nbsp;
  <a href="https://github.com/erneupa/PythonClocker/wiki/Wiki%E2%80%90PythonClocker">
    <img src="https://img.shields.io/badge/📘 Wiki-Documentation-green?style=for-the-badge" alt="Wiki">
  </a>
  &nbsp;
  <a href="https://github.com/erneupa/PythonClocker/blob/main/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/📘 Contributing-Documentation-pink?style=for-the-badge" alt="CONTRIBUTING">
  </a>
</p>

## Meaning of extension
Extensions are small software programs that personalize the browsing experience. They allow users to customize the functionality and behavior of the browser to their individual needs or preferences.

## Edit the extension

1. In the file `server.js`, change the `TU-APYKEY`
2. In the file `background.js`, change the `TU-APYKEY`
3. The API key can be found in the Moodle files.

## How to install the extension?

1. [CLICK HERE](https://github.com/erneupa/PythonClocker/tree/main/PythonClocker) to download the extension.
2. Go to this link `chrome://extensions/`
3. Enable this feature ![1](https://github.com/erneupa/PythonClocker/blob/main/assets/1a.png)
4. Add the extension here ![2](https://github.com/erneupa/PythonClocker/blob/main/assets/2a.png)
5. Install a local server.

## How to install a local server?
### Download node.js.
    1. Go to this [url](https://nodejs.org/en)
    2. Download and install the app.
1. Go to the Windows console.
2. Access the extension folder through the console.
3. Copy and paste this code:```npm install node-fetch@2```
4. Copy and paste this code: ```npm install express cors```
5. Copy and paste this code: ```node server.js```

**TO USE THE EXTENSION!!**

## Example of usage.



## QUESTIONS

### Data Lifecycle (5b)

#### How is data managed from its creation to deletion in your project?
Data in my extension is generated when the user sets the time on the clock or when a request is made to OpenAI to get a question. It is not stored permanently, only used while the extension is active and then disappears when it is closed.

#### What strategy do you follow to ensure data consistency and integrity?
- Hours and minutes are validated before starting the countdown.
- The response from OpenAI is properly handled to avoid errors in the JSON structure.
- `try-catch` is used in `background.js` to catch API errors and handle incorrect responses.

### Cloud Storage (5f)

#### If your software uses cloud storage, how do you guarantee the security and availability of data?
- HTTPS is used for all requests to OpenAI.
- Sensitive data is not stored in accessible files.
- Authentication could be integrated to improve security in future versions.

#### What alternatives did you consider for storing data and why did you choose your current solution?
I could have saved data in `chrome.storage` or on a private server, but since the extension does not need persistence, I preferred to keep everything in memory to make it faster.

#### If you don't use the cloud, how could you integrate it in future versions?
I could connect the extension with Google Drive or Firebase so the user can access their history of questions and answers from any device.

### Security and Regulation (5i)

#### What security measures did you implement to protect data or processes in your project?
- **No personal data is stored on the frontend.**
- **Errors are handled in `background.js`** to avoid API failures.
- **Access restrictions in `manifest.json`**, allowing only secure connections.

#### What regulations (e.g., GDPR) could affect the use of your software and how have you taken them into account?
At the moment it does not affect because no personal data is stored. But if in future versions user data is saved, privacy options would need to be added to comply with GDPR.

### Impact of Digital Enabling Technologies (THD) on Business and Plant (2e)

#### What impact would your software have in a business environment or an industrial plant?
It could be useful in education or companies that want to evaluate their employees with random questions. In an industrial plant, it could be adapted to show reminders or manage automated tasks.

#### How do you think your solution could improve operational processes or decision-making?
If implemented in a business, it could automate learning with dynamically generated questions. It could also serve as automatic reminders for important tasks.

#### If your project does not directly apply to business or plant, what other environments could benefit?
Education is where it fits best. It could be improved so programming students practice with customized tests according to their level.

### Improvements in IT and OT (2f)

#### How can your software facilitate integration between IT and OT environments?
If adapted for use in a company, it could integrate with alert or monitoring systems to automate processes.

#### What specific processes could benefit from your solution in terms of automation or efficiency?
- **Automatic reminders** for maintenance in factories.
- **Dynamic evaluations** for employees using OpenAI.
- **Task automation** with alerts based on predefined times.

#### If it does not apply to IT or OT, how could you adapt it to improve specific technological processes?
It could connect with Google Calendar to set personalized reminders or with external APIs to manage time efficiently.

### Digital Enabling Technologies (2g)

#### What digital enabling technologies (THD) have you used or could you integrate into your project?
- **Artificial Intelligence (OpenAI):** Generates programming questions in real time.
- **API KEY:** Connects the extension remotely with OpenAI.
- **Local storage (`chrome.storage`):** Could be used in future versions to save settings.

#### How do these technologies improve the functionality or reach of your software?
- OpenAI makes the questions dynamic and different each time.
- A storage system would allow users to save their progress.
