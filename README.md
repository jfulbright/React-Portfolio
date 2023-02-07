# React Portfolio

My personal portfolio built using React and Bootstrap. I'm continually adding projects, modifying content, and updating the look and functionality. 

## Table of Contents 

- [React Portfolio](#react-portfolio)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Screenshots](#screenshots)
  - [Usage](#usage)
  - [Pages](#pages)
    - [Main](#main)
    - [Projects](#projects)
    - [About](#about)
    - [Resume](#resume)
    - [Contact](#contact)
    - [Form](#form)
  - [License](#license)
  - [About](#about-1)
    - [Jeremy Fulbright](#jeremy-fulbright)
  - [Credits](#credits)
  - [Questions](#questions)

## Prerequisites
Below are the tools used:

* [React.js](https://reactjs.org/)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [React Font Awesome](https://fontawesome.com/v5/docs/web/use-with/react)


## Installation

To build a similar, single page portfolio or website for yourself, you'll want first create a new React app:
```
npx create-react-app <projectname>
```

You can also fork and clone this repo to use as a template and then just run npm install

## Screenshots

![homepage](https://user-images.githubusercontent.com/62451633/93927549-e04f2580-fccd-11ea-9afc-aa442020ecbe.png)

![Projects](https://user-images.githubusercontent.com/62451633/93927549-e04f2580-fccd-11ea-9afc-aa442020ecbe.png)

## Usage

You'll be able to run the app locally by running npm start:
```
npm start
```
All your changes should update the local host in real time. If you want to deploy your app, you'll need to make a few changes to the package.json file. Directions below for deploying to Github Pages:

1. Add a homepage: <name-of-the-page-deploying-to> to your package.json in the root
  ```
  "homepage": "https://jfulbright.github.io/React-Portfolio/"
  ```
2. In the "scripts" property of your package.json, add two scripts:

3. Now, after you merge your changes and pull the most up-to-date master, open a new terminal and run npm run deploy:
```
npm run deploy
```
  
1. This creates a new branch, gh-pages. Open your deploy settings in Github and change the deploy branch to gh-pages


5. Every time you want your deployed site to update with the changes you've made, you need to run npm run deploy

## Pages

### Main
  * Basic about with main navbar links and link to the full bio


### Projects
  * Portfolio of selected projects with logo, description, technologies used, and links to the repo and live site

### About
  * Bio page with more about me, my background, and favorite technologies
  
### Resume
  * Link to standard resume

### Contact
  * Email, LinkedIn, and Github

### Form
  * Error handling
  

## License

This project is licensed under the MIT license.

## About

### [Jeremy Fulbright](https://github.com/jfulbright)

If you would like to use this template for your own portfolio, please just credit me. Thank you! :)

## Credits

N/A

## Questions

Questions or feedback-- we welcome them all! Feel free to reach out for any questions about the repo, open an issue or contact me and I'll get back to you soon!