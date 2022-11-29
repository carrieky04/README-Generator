const fs = require('fs');
const inquirer = require('inquirer');


// README Questions
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What needs to be installed in order to run your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions for usage.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contributing Guidelines',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Test instructions',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'license',
        choices: ['MIT', 'BSD', 'GNU'] ,
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email',
    }
]


// README template
const generateReadMe = (answers) => 
`# ${answers.title}
!${renderBadge(answers)}

## Table of Contents:
1.  [Description](#description)
2.  [Installation](#installation)
3.  [Usage](#usage)
4.  [Contributing](#contributing)
5.  [Test](#test)
6.  [License](#license)
7.  [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Test
${answers.test}

## Questions
My GitHub: ${answers.github}\n 
My Email: ${answers.email}

## License
${answers.license}`


// Creates license badge
const renderBadge = (answers) => {
    if (answers.license) {
        return `[License](https://img.shields.io/badge/license-${answers.license}-blue.svg)`
    } else {
        return '';
    }
}


// Prompts user with questions for readme
inquirer
  .prompt(questions)
  .then((answers) => {
    // user feedback
    const readMePage = generateReadMe(answers);

    fs.writeFile('sampleREADME.md', readMePage, (err) =>
        err ? console.log(err) : console.log('Succesfully created README.md')
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log('Prompt could not be rendered in the current environment')
    } else {
        console.log('Something else went wrong')
    }
  })