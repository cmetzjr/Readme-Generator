// function to generate markdown for README
function generateMarkdown(data) {
  
  //this is the license type selected by the user and is determine whether the user chose a pre-defined license type or typed their own
  let selectedLicense;
  function licenseChooser(){
    if (data.license === 'Other'){
      selectedLicense = data.otherLicense;
    }else{
      selectedLicense = data.license;
    };
  }
  licenseChooser()

  return `
<img src="https://img.shields.io/badge/license-${selectedLicense}-brightgreen">

# ${data.title}\n
${data.desc}\n
${data.url}

## Table of Contents
* [Installation](#installation)
* [Application use](#use)
* [Contribution Guidelines](#contribution)
* [Tests](#tests)
* [License](#License)
* [Questions](#Questions)


## Installation
${data.installation}

## Usage
${data.use}\n
<img src="${data.screen}" width="200px">

## Contribution
${data.contrib}

## Tests
${data.test}

## License
This app can be used under the terms of the ${selectedLicense} license.

## Questions
For questions, please contact <${data.email}>.<br>
GitHub repo: https://www.github.com/${data.ghUser}/${data.ghRepo}

`;
}

module.exports = generateMarkdown;