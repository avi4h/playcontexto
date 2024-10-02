# `PlayContexto`

<p align="left">
    <img src="https://img.shields.io/badge/version-v.1.0-blue" alt="version" >
	<img src="https://img.shields.io/github/last-commit/avi4h/playcontexto?logo=git" alt="last-commit">
	<img src="https://img.shields.io/github/languages/count/avi4h/playcontexto?logo=googletagmanager" alt="repo-language-count">
    <img src="https://img.shields.io/github/issues-raw/avi4h/playcontexto?logo=github" alt="repo-language-count">
	<img src="https://img.shields.io/github/languages/top/avi4h/playcontexto?logo=javascript" alt="repo-top-language">
	<img src="https://img.shields.io/github/license/avi4h/playcontexto?logo=opensourceinitiative" alt="license">
</p>


A high-performance, ad-free, and cookie-free replica of the popular word guessing game Contexto.me. Our production site has achieved a perfect score of 100/100 in all four aspects of Google Lighthouse, for its performance, accessibility, best practices, and SEO.

![image](https://github.com/user-attachments/assets/4e2887c8-1165-4712-808f-4df458f40f59)

## Features

**High Performance**: Achieved a perfect score of 100/100 in Google Lighthouse for performance, accessibility, best practices, and SEO.

**Ad-Free and Cookie-Free**: Enjoy the game without any interruptions or privacy concerns.

**GloVe Algorithm**: Utilizes the GloVe algorithm to build the word list, ensuring accurate and meaningful word proximity calculations.

**CORS Handling**: Uses AllOrigins to prevent CORS issues when fetching data from the api.contexto.me API.

**Modern Tech Stack**: Built with React and styled using Tailwind CSS for a responsive and visually appealing interface.

**Error Handling**: Enhanced error handling with better UI transitions compared to the original Contexto.me.

## Technical Stack

<p align="center"> 
    <img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React"> 
    <img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite"> 
    <img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC.svg?style=flat&logo=Tailwind%20CSS&logoColor=white" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/GloVe-9463C6?style=flat&logo=Akamai&logoColor=white" alt="GloVe"> 
    <img src="https://img.shields.io/badge/allOrigin-5CDFCB?style=flat&logo=origin&logoColor=white" alt="AllOrigins"> 
    <img src="https://img.shields.io/badge/Contexto%20API-F4EDE2?style=flat&logo=serverless&logoColor=black" alt="Contexto API">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript"> 
    <img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5"> 
</p>

## GloVe: Global Vectors for Word Representation

GloVe (Global Vectors for Word Representation) is an unsupervised learning algorithm developed by researchers at Stanford University for obtaining vector representations for words. The training is performed on aggregated global word-word co-occurrence statistics from a corpus, and the resulting representations showcase interesting linear substructures of the word vector space.

#### How GloVe is Used 
GloVe is used to build the word list and calculate word proximities. This ensures that the game provides accurate and meaningful word proximity calculations, enhancing the overall user experience.

#### Key Features of GloVe:
Unsupervised Learning: GloVe does not require labeled data.
Word-Word Co-occurrence: Utilizes global word-word co-occurrence statistics from a large corpus to learn word vectors.
Linear Substructures: The resulting word vectors capture meaningful linear substructures, allowing for analogical reasoning.
Scalability: Efficiently scales to large corpora, making it suitable for real-world applications.

For more information about GloVe, visit the official [GloVe project](https://nlp.stanford.edu/projects/glove/) page.

## 📦 Installation

Build the project from source:

```sh
❯ git clone https://github.com/avi4h/playcontexto
❯ cd playcontexto
❯ npm install
```

## 🧩 Modules

<details closed><summary>.</summary>

| File | Summary |
| --- | --- |
| [index.html](https://github.com/avi4h/playcontexto/blob/main/index.html) | <code> The main HTML file for the application, containing the basic structure and links to CSS and JavaScript files. </code> |
| [postcss.config.js](https://github.com/avi4h/playcontexto/blob/main/postcss.config.js) | <code> Configuration file for PostCSS, a tool for transforming CSS with JavaScript plugins. </code> |
| [vite.config.js](https://github.com/avi4h/playcontexto/blob/main/vite.config.js) | <code> Configuration file for Vite, a development server and build tool for modern web applications. </code> |
| [package.json](https://github.com/avi4h/playcontexto/blob/main/package.json) | <code> A JSON file containing metadata for the project, including dependencies, scripts, and version information </code> |
| [eslint.config.js](https://github.com/avi4h/playcontexto/blob/main/eslint.config.js) | <code> Configuration file for ESLint, a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. </code> |
| [tailwind.config.js](https://github.com/avi4h/playcontexto/blob/main/tailwind.config.js) | <code> Configuration file for Tailwind CSS, a utility-first CSS framework. </code> |
| [package-lock.json](https://github.com/avi4h/playcontexto/blob/main/package-lock.json) | <code> A JSON file containing a snapshot of the project's dependencies, used for locking dependencies to specific versions. </code> |

</details>

<details closed><summary>src</summary>

| File | Summary |
| --- | --- |
| [App.jsx](https://github.com/avi4h/playcontexto/blob/main/src/App.jsx) | <code> The main application component, responsible for rendering the application's UI. </code> |
| [index.css](https://github.com/avi4h/playcontexto/blob/main/src/index.css) | <code> A CSS file containing global styles for the application. </code> |
| [main.jsx](https://github.com/avi4h/playcontexto/blob/main/src/main.jsx) | <code> The main entry point for the application, responsible for rendering the application to the DOM. </code> |

</details>

<details closed><summary>src.store</summary>

| File | Summary |
| --- | --- |
| [useLocalStorageState.jsx](https://github.com/avi4h/playcontexto/blob/main/src/store/useLocalStorageState.jsx) | <code> A custom hook for managing local storage state </code> |
| [utils.jsx](https://github.com/avi4h/playcontexto/blob/main/src/store/utils.jsx) | <code> Utility functions for the application </code> |
| [useLocalStorage.jsx](https://github.com/avi4h/playcontexto/blob/main/src/store/useLocalStorage.jsx) | <code> A custom hook for interacting with local storage </code> |
| [useGameState.jsx](https://github.com/avi4h/playcontexto/blob/main/src/store/useGameState.jsx) | <code> A custom hook for managing game state </code> |
| [useModalAnimation.jsx](https://github.com/avi4h/playcontexto/blob/main/src/store/useModalAnimation.jsx) | <code> A custom hook for managing modal animations </code> |
| [useModalState.jsx](https://github.com/avi4h/playcontexto/blob/main/src/store/useModalState.jsx) | <code> A custom hook for managing modal state </code> |
| [useShareMessage.jsx](https://github.com/avi4h/playcontexto/blob/main/src/store/useShareMessage.jsx) | <code> A custom hook for generating share messages </code> |

</details>

<details closed><summary>src.modals</summary>

| File | Summary |
| --- | --- |
| [Words.jsx](https://github.com/avi4h/playcontexto/blob/main/src/modals/Words.jsx) | A modal component for displaying top 500 word lists |
| [Prev.jsx](https://github.com/avi4h/playcontexto/blob/main/src/modals/Prev.jsx) | A modal component for displaying previous games |
| [Feedback.jsx](https://github.com/avi4h/playcontexto/blob/main/src/modals/Feedback.jsx) | A modal component for collecting user feedback |
| [GiveUp.jsx](https://github.com/avi4h/playcontexto/blob/main/src/modals/GiveUp.jsx) | A modal component for confirming give up |
| [Credits.jsx](https://github.com/avi4h/playcontexto/blob/main/src/modals/Credits.jsx) | A modal component for displaying credits |
| [Settings.jsx](https://github.com/avi4h/playcontexto/blob/main/src/modals/Settings.jsx) | A modal component for displaying settings |
| [FaqDetailed.jsx](https://github.com/avi4h/playcontexto/blob/main/src/modals/FaqDetailed.jsx) | A modal component for displaying detailed FAQs |
| [HowToPlay.jsx](https://github.com/avi4h/playcontexto/blob/main/src/modals/HowToPlay.jsx) | A modal component for displaying how to play instructions |

</details>

<details closed><summary>src.components</summary>

| File | Summary |
| --- | --- |
| [Won.jsx](https://github.com/avi4h/playcontexto/blob/main/src/components/Won.jsx) | <code> A component for displaying win messages </code> |
| [Faq.jsx](https://github.com/avi4h/playcontexto/blob/main/src/components/Faq.jsx) | <code> A component for displaying FAQs </code> |
| [Foot.jsx](https://github.com/avi4h/playcontexto/blob/main/src/components/Foot.jsx) | <code> A component for displaying footers </code> |
| [Loading.jsx](https://github.com/avi4h/playcontexto/blob/main/src/components/Loading.jsx) | <code> A component for displaying loading animations </code> |
| [End.jsx](https://github.com/avi4h/playcontexto/blob/main/src/components/End.jsx) | <code> A component for displaying end game messages </code> |
| [GaveUp.jsx](https://github.com/avi4h/playcontexto/blob/main/src/components/GaveUp.jsx) | <code> A component for displaying give up messages </code> |
| [How.jsx](https://github.com/avi4h/playcontexto/blob/main/src/components/How.jsx) | <code> A component for displaying how to play instructions </code> |
| [Input.jsx](https://github.com/avi4h/playcontexto/blob/main/src/components/Input.jsx) | <code> A component for handling user input </code> |
| [Rank.jsx](https://github.com/avi4h/playcontexto/blob/main/src/components/Rank.jsx) | <code> A component for displaying guessed word distances from secret word </code> |
| [Dropdown.jsx](https://github.com/avi4h/playcontexto/blob/main/src/components/Dropdown.jsx) | <code> A component for displaying dropdown menus </code> |
| [Header.jsx](https://github.com/avi4h/playcontexto/blob/main/src/components/Header.jsx) | <code> A component displaying heading portion </code> |
| [Score.jsx](https://github.com/avi4h/playcontexto/blob/main/src/components/Score.jsx) | <code> A component for displaying scores </code> |

</details>

## 🤝 Contributing

Contributions are welcome! You can contribute by reporting issues

**[Report Issues](https://github.com/avi4h/playcontexto/issues)**: Submit bugs found or log feature requests for the `playcontexto` project.

## 🙌 Acknowledgments

- Contexto.me for the original game concept.
- GloVe for the word vector representations.
- AllOrigins for the CORS proxy service.

## 🎗 License

This project is protected under the [MIT License](/LICENSE.txt).

Enjoy playing and happy guessing!                     






