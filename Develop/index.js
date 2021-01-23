// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is your project’s name?",
    "Please write a short description of your project",
    "What kind of license should your project have?",
    "What command should be run to intall dependencies?",
    "What command should be run to run tests?",
    "What does the user need to know about using the repo?",
    "What does the user need to know about contributing to the repo?"
];

// TODO: Create a function to initialize app
const init = () => 
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'username',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'email',
            },
            /*
            {
                type: 'input',
                message: questions[2],
                name: 'projectName',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'projectDescription',
            },
            */
            {
                type: 'list',
                message: questions[4],
                name: 'license',
                choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
            },
            /*
            {
                type: 'input',
                message: questions[5],
                name: 'dependencies',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'tests',
            },
            {
                type: 'using',
                message: questions[7],
                name: 'username',
            },
            */
            {
                type: 'input',
                message: questions[8],
                name: 'contributing',
            }
        ])

/*
What kind of license should your project have?
MIT
Apache 2.0
GPL 3.0
BSD 3
None
*/


// Function call to initialize app
const generateReadMe = (answers) => 
`# ${answers.projectName}

[Username](#username)

## Username
${answers.username}
${answers.license}
`;

init()
  .then((answers) => writeFileAsync('READMe.md', generateReadMe(answers)))


