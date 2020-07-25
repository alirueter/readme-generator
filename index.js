//add inquirer
const inquirer = require('inquirer');

    const promptUser = () => {
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'project',
                message: 'What is the name of your project?' 
            },
            {
                type: 'input',
                name: 'desc',
                message: 'Describe your project: '
            },
            {
                type: 'input',
                name: 'install',
                message: 'Installation instructions: '
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Usage instructions: '
            },
            {
                type: 'confirm',
                name: 'license',
                message: 'Please select license: ',
                default: false
            }, 
            {
                type: 'input',
                name: 'cont',
                message: 'Contribution guidelines: '
            },
            {
                type: 'input',
                name: 'test',
                message: 'Tests: '
            },
            {
                type: 'input',
                name: 'username',
                message: 'GitHub username: '
            },
            {
                type: 'input',
                name: 'link',
                message: 'Link to GitHub profile: '
            },
            {
                type: 'input',
                name: 'email',
                message: 'Email: '
            }
        ]);
    };

    promptUser().then(answers => console.log(answers));

// //require fs
// const fs = require('fs');

// //require generateReadMe()
// const generateReadMe = require('./src/readme-template.js');

//capture user input
const projectDataArgs = [process.argv.slice(2, process.argv.length)];

//extract arugments and store as distinct variables
const project = projectDataArgs[0];

// const printProjectData = projectDataArr => {
//     projectDataArr.forEach(projectItem => console.log(projectItem));
// };

// printProjectData(projectDataArgs);


// //function to write readme file
// fs.writeFile('./README.md', generateReadMe(project), err => {
//     if (err) throw new Error(err);
//     console.log('ReadMe complete! Check out README.md to see the output!')
// })

//STARTER CODE
// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
