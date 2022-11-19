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
        message: 'Provide instructions and examples for usage.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List collaborators, if any, with links to their GitHub ',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'license',
        choices: ['MIT', 'ISC', 'GNUPLv3'] ,
        filter(value) {
            return value.toLowerCase();
        }
    }
]



inquirer
  .prompt(questions)
  .then(answers => {
    // user feedback
    console.log(answers);
  })