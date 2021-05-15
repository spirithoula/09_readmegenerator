// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Enter a title to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of the project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Enter a description to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Table of Contents',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Enter a table of contents to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Information',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Enter installation information to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Enter information on how to use project to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can people contribute to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Enter contribution infromation to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Enter testing requirements to continue');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('Pick a license to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub Username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Enter your GitHub username to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter a valid email address',
    }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Information was successfully transferred to the README')
    });
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();
