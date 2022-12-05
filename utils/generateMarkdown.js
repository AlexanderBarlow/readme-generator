// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license == 'MIT') {
    return `![License Badge]()`;
  } else if (license == 'MIT') {
    return `![License Badge]()`;
  } else if (license == 'MIT') {
    return `![License Badge]()`;
  } else if (license == 'MIT') {
    return `![License Badge]()`;
  } else if (license == 'None') {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if(data.license === 'MIT') {
    return `###MIT License`;
  }else if(data.license === 'Apache 2.0') {
    return `###Apache 2.0 License`;
  }else if(data.license === 'The Unlicense') {
    return `###The Unlicense License`;
  }else if(data.license === 'Boost Software License 1.0') {
    return `###Boost Software License 1.0`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
