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
    inquirer //Question prompts
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
            {
                type: 'list',
                message: questions[4],
                name: 'license',
                choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
            },
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
                type: 'input',
                message: questions[7],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'contributing',
            }
        ])


// variable of ReadMe file contents
const generateReadMe = (answers) => 
`# ${answers.projectName}

## Description

${answers.projectDescription}

# Table of Contents

* [Installation](#installation)

* [License](#license)

* [Contributing](contributing)

* [Usage](#usage)

* [Tests](#tests)

* [Quesitons](#questions)

## Installation

To install necessary dependencies, run the following command:

''
${answers.dependencies}
''

## License

This projects is licensed under the ${answers.license} license

## Contributing

${answers.contributing}

## Usage

${answers.usage}

## Tests

To run tests, rund the following command:

''
${answers.tests}
''

## Questions

If you have any questions about the repo, open an issue or contact me at ${answers.email}.
You can find more of my work at: [${answers.username}](https://github.com/${answers.username}).

`;

//Generating ReadMe File
init()
  .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))


