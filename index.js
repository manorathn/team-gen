// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Class
const Engineer = require('./lib/Engineer');
const manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const managerQuestion = [
    {
        type: 'input',
        name: 'name',
        message: "What is your manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your manager's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your manager's email address?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is your manager's office number?"
    }
];

const engineerQuestion = [
    {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your engineer's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email address?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your engineer's GitHub username?"
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your intern's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your intern's email address?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What university does your intern attend?"
    }
];
