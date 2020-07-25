//capture user input
const projectDataArgs = process.argv.slice(2, process.argv.length);
    console.log(projectDataArgs);

const printProjectData = projectDataArr => {
    projectDataArr.forEach(projectItem => console.log(projectItem));
};

printProjectData(projectDataArgs);

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
