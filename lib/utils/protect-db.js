require('dotenv').config();
if(!process.env.MONGODB_URI.includes('localhost')) {
  const inquirer = require('inquirer');

  const questions = [{
    type: 'confirm',
    name: 'proceed',
    message: 'You are connected to an EXTERNAL database, \nthis test may cause PERMANENT deletions!\nProceed?',
  }];

  inquirer.prompt(questions).then(answers => {
    if(answers['proceed']) {
      
    }
    else console.log('EXIT'); //eslint-disable-line no-console
  });
}
