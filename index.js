// require path
const path = require('path');

//require fs
const fs = require('fs');

//add inquirer
const inquirer = require('inquirer');

//require generateReadMe()
const templateData = require('./src/readme-template.js');

    //const promptUser = () => {
        //return inquirer
        //.prompt([
            const questions = [
            {
                type: 'input',
                name: 'project',
                message: 'What is the name of your project? (Required)',
                validate: projectInput => {
                    if (projectInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter the name of your project!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'desc',
                message: 'Describe your project: (Required)',
                validate: descInput => {
                    if (descInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter a description of your project!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'install',
                message: 'Installation instructions: (Required)',
                validate: installInput => {
                    if (installInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter installation instructions!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Usage instructions: (Required)',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter usage instructions!');
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'license',
                message: 'Please select license: (Required)',
                choices: ['MIT', 'Other'],
            }, 
            {
                type: 'input',
                name: 'cont',
                message: 'Contribution guidelines: (Required)',
                validate: contInput => {
                    if (contInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter contribution guidelines!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'test',
                message: 'Tests: (Required)',
                validate: testsInput => {
                    if (testsInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter testing information!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'username',
                message: 'GitHub username: (Required)',
                validate: usernameInput => {
                    if (usernameInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter your GitHub username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Email: (Required)',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter your email address!');
                        return false;
                    }
                }
            }];
       // ]);
   // };

    // promptUser()
    //     .then(projectData => {
    //         const pageReadMe = generateReadMe(projectData);
        
    //         fs.writeFile('./README.md', pageReadMe, err => {
    //           if (err) throw new Error(err);
    //         });
    //     });

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating Readme");
        writeToFile("README.md", templateData({...inquirerResponses}));
    })
}

// function call to initialize program
init();





// //capture user input
// const projectDataArgs = [process.argv.slice(2, process.argv.length)];

//extract arugments and store as distinct variables
//const project = projectDataArgs[0];

// const printProjectData = projectDataArr => {
//     projectDataArr.forEach(projectItem => console.log(projectItem));
// };

// printProjectData(projectDataArgs);


// //function to write readme file
// fs.writeFile('./README.md', generateReadMe(templateData), err => {
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


