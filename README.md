# Cypress Automation

## Installation (from scratch on Mac)
* Download **Node.js** from the [Official Website](https://nodejs.org/)
* By default, Node.js gets installed under `/usr/local/bin`. Ensure it is in your `$PATH ` variable by:  `echo $PATH`. If not, add `/usr/local/bin` to your `$PATH` variable.
* VS Code is a good IDE. Of-course you can choose any IDE as per your liking.
* Create a new project/folder by opening a  Termial window in VS Code. Run the following commands:
> `$ mkdir CypressAutomation`
> `$ cd CypressAutomation`
* Now create a `package.json` file under this project by running command and keep pressing *Enter* key until done:
> `CypressAutomation$ npm -i init`
* `package.json` file will be created with default enteries.
* Install Cypress via npm with parameter `--save-dev` which will add a Cypress line with latest version in `package.json`:
> `CypressAutomation$ npm install cypress --save-dev`

**PLEASE NOTE:** `--save-dev` is a one time thing. So other team members who download the repo need to just do: `npm install` and it will pull package/dependcies from the package.json file.


* *FYI:* [Official Installation Reference Documentation](https://docs.cypress.io/app/get-started/install-cypress)

## Running Cypress Tests
