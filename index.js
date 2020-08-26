//required modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
        message: "Project title:",
        type: "input",
        name: "title"
    },
    {
        message: "Describe the project:",
        type: "input",
        name: "desc"
    },
    {
        message: "URL where deployed:",
        type: "input",
        name: "url"
    },
    {
        message: "Installation instructions:",
        type: "input",
        name: "installation"
    },
    {
        message: "Use instructions:",
        type: "input",
        name: "use"
    },
    {
        message: "Path (relative) to screenshot/screencast:",
        type: "input",
        name: "screen"
    },
    {
        message: "Contribution guidelines:",
        type: "input",
        name: "contrib"
    },
    {
        message: "Tests conducted:",
        type: "input",
        name: "test"
    },
    {
        message: "Select the project's license:",
        type: "list",
        choices: ['Boost Software 1.0', 'MIT', 'Apache 2.0', 'Mozilla 2.0', 'GNU', 'Other'],
        name: "license",

    },
    //if someone chooses "Other" to the prior question, then this will allow them to type in their license.
    {
        message: "Which other license?",
        type: "input",
        name: "otherLicense",
        when: function(questions){
            return questions.license==='Other'
        }
    },
    {
        message: "Github user name:",
        type: "input",
        name: "ghUser"
    },
    {
        message: "Github repo name:",
        type: "input",
        name: "ghRepo"
    },
    {
        message: "Email address:",
        type: "input",
        name: "email"
    }
];


// function to write README file
let markdown;
function writeToFile() {
    fs.writeFile("README.md", markdown, function (err) {
        if (err) {
            return console.log(err)
        } else {
            console.log("Your README.md has been created!")
        }
    });
}


// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => {
        markdown = generateMarkdown(data);
        writeToFile();

    })
}

// function call to initialize program
init();