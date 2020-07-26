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

        ## Contributing
        ${data.cont}

        ## Tests
        ${data.test}

        ## Questions
        ${data.username}
        [GitHub Profile: ](https://github.com/${data.username})
        If you have any questions, you can contact me at ${data.email}.
    `;
};

// function templateData(data) {
//     return `# ${data.title}`
// }

// templateData();

// function getBadge(license) {
//     if (license !== "None") {
//         return `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license})]`
//     }  
// }

// getBadge();