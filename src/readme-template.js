module.exports = templateData = data => {
    console.log(templateData);

    return `
# ${data.project}

## Description
${data.desc}

## Table of Contents

## Installation
${data.install}

## Usage
${data.usage}

## License
${data.license}
${getBadge(data.license)}

## Contributing
${data.cont}

## Tests
${data.test}

## Questions
[${data.username}](https://github.com/${data.username})
If you have any questions, you can contact me at ${data.email}.
    `;
};

function getBadge(license) {
    if (license !== "None") {
        return `[![License: ${license}](https://img.shields.io/badge/License-${license})](https://opensource.org/licenses/${license})`
    } 
};

// function getLink(link) {
//     if (link !=="None") {
//         return `[License Information](https://opensource.org/licenses/${link})`
//     }
// };