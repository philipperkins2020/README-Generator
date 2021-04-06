const inquirer = require('inquirer')
const fs = require('fs')

const generatereadme = (response) =>
  `# ${response.Title}
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
## ${response.Description}
## Table of Contents 
* [Installation](#installation) 
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${response.Installation}
## Usage
${response.Usage}
## License
${response.Licenses}
## Contributing
${response.Contributions}
## Tests
${response.Tests}

## Questions
${response.Github}
${response.Email}
`

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'How would you describe your project?',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'How would i install the project?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How do users and contributors use your project?',
    },
    {
      type: 'input',
      name: 'Contributions',
      message: 'What are the guidelines for contributors?',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'How would you test the project?',
    },
    {
      type: 'list',
      name: 'Licenses',
      message: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
      type: 'input',
      name: 'Github',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'Email',
      message: 'What is your Email address?',
    }






  ])



  .then((response) =>{
  const readMe = generatereadme(response);
    fs.writeFile('README.md', readMe, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
