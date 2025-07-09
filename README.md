## PlayContexto

<p align="left">
    <img src="https://img.shields.io/badge/version-v.1.0-blue" alt="version" >
	<img src="https://img.shields.io/github/last-commit/avi4h/playcontexto?logo=git" alt="last-commit">
	<img src="https://img.shields.io/github/languages/count/avi4h/playcontexto?logo=googletagmanager" alt="repo-language-count">
    <img src="https://img.shields.io/github/issues-raw/avi4h/playcontexto?logo=github" alt="repo-language-count">
	<img src="https://img.shields.io/github/languages/top/avi4h/playcontexto?logo=javascript" alt="repo-top-language">
	<img src="https://img.shields.io/github/license/avi4h/playcontexto?logo=opensourceinitiative" alt="license">
</p>


Faster replica of the popular word guessing game Contexto.me. Site has a perfect score of 100/100 in all four aspects of Google Lighthouse, for its performance, accessibility, best practices, and SEO.

![image](https://github.com/user-attachments/assets/4e2887c8-1165-4712-808f-4df458f40f59)

## Features

**GloVe Algorithm**: Utilizes the GloVe algorithm to build the word list, ensuring accurate and meaningful word proximity calculations.

**High Performance**: Achieved a perfect score of 100/100 in Google Lighthouse for performance, accessibility, best practices, and SEO.

**CORS Handling**: Uses AllOrigins to prevent CORS issues when fetching data from the api.contexto.me API.

**Error Handling**: Enhanced error handling with better UI transitions compared to the original Contexto.me.

## GloVe

GloVe (Global Vectors for Word Representation) is an unsupervised learning algorithm. The training is performed on aggregated global word-word co-occurrence statistics from a corpus, and the resulting representations showcase interesting linear substructures of the word vector space.GloVe is used to build the word list and calculate word proximities. This ensures that the game provides accurate and meaningful word proximity calculations, enhancing the overall user experience.

For more information about GloVe, visit the official [GloVe project](https://nlp.stanford.edu/projects/glove/) page.

## 🙌 Acknowledgments

- Contexto.me for the original game concept.
- GloVe for the word vector representations.
- AllOrigins for the CORS proxy service.

Enjoy playing and happy guessing!                     






