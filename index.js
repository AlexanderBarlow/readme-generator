// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    inquirer
        .prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title'
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description', 
    },
    {
        type: 'list',
        message: 'What kind of license would you like your project to have?',
        name: 'license',
        choices: 'MIT, Apache 2.0, The Unlicense, Boost Software License 1.0, None'
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencies'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'repo'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribute'
    }])
    .then(input => {
        return input;
    })
}

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data => {
        console.log('Your Readme file has been generated.')
    })
}

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then(input => {
        return generate(input);
    })
    .then(markdown => {
        writeToFile('./gen/README.md', markdown);
    })
}

// Function call to initialize app
init();
