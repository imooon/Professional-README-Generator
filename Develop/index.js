const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate the README content
function generateREADME(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
[![License](https://img.shields.io/badge/License-${answers.license}-brightgreen.svg)](https://opensource.org/licenses/${answers.license})
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, you can reach me via:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;
}

// Function to write content to the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README file has been successfully generated!');
    });
}

// Function to initialize the application
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter the title of your project:',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Provide a short description of your project:',
                name: 'description',
            },
            {
                type: 'input',
                message: 'Enter installation instructions:',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Provide usage information:',
                name: 'usage',
            },
            {
                type: 'list',
                message: 'Choose a license for your application:',
                choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
                name: 'license',
            },
            {
                type: 'input',
                message: 'Provide contribution guidelines:',
                name: 'contributing',
            },
            {
                type: 'input',
                message: 'Provide test instructions:',
                name: 'tests',
            },
            {
                type: 'input',
                message: 'Enter your GitHub username:',
                name: 'github',
            },
            {
                type: 'input',
                message: 'Enter your email address:',
                name: 'email',
            },
        ])
        .then((answers) => {
            const readmeContent = generateREADME(answers);
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => console.error(error));
}

// Function call to initialize the application
init();
