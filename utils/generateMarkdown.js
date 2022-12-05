// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license !== 'None') {
    return `![License Badge](https://img.shields.io/badge/license-${license.split(" ").join("")}-brightgreen)`;
  } else if (license == 'None') {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if(license === 'MIT') {
    return `###MIT License`;
  }else if(license === 'Apache 2.0') {
    return `###Apache 2.0 License`;
  }else if(license === 'The Unlicense') {
    return `###The Unlicense License`;
  }else if(license === 'Boost Software License 1.0') {
    return `###Boost Software License 1.0`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license == 'None') {
      return `##License There has not been any license set for this project.`;
    }else {
      return `##License ${renderLicenseLink(license)}`;
    }
  } 

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `#${data.Title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](##Installation)
  * [Usage](##Usage)
  * [License](##license)
  * [Contributing](##Contributing)
  * [Tests](##Tests)
  * [Questions](##Questions)
  ***
  ## Installation
  ${data.dependencies}
  ## Usage
  ${data.repo}
  ${renderLicenseSection(data)}
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.tests}
  
  ## Questions
  Contact Information is below. 
  Email: ${data.email} 
  GitHub : [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
