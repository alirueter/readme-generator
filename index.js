//require fs
const fs = require('fs');

//require generateReadMe()
const generateReadMe = require('./src/readme-template.js');

//capture user input
const projectDataArgs = [process.argv.slice(2, process.argv.length)];

//extract arugments and store as distinct variables
const project = projectDataArgs[0];
console.log('project: ', project);

// const printProjectData = projectDataArr => {
//     projectDataArr.forEach(projectItem => console.log(projectItem));
// };

// printProjectData(projectDataArgs);


//function to write readme file
fs.writeFile('./README.md', generateReadMe(project), err => {
    if (err) throw new Error(err);
    console.log('ReadMe complete! Check out README.md to see the output!')
})

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
