# Automation project

- [Node](https://nodejs.org/en/download) v22.13.1
- [Cypress](https://www.cypress.io/) v14.0.0

# How to run

- Make sure to have Node and Cypress installed
- Clone the project
- On the directory, run the command: npx cypress open
- For this automation, only chrome is assured to be supported due to chromeWebSecurity: false being set
- Cypress UI should load, select E2E Testing, choose the chrome browser and hit Start E2E Testing in the navigator you selected
- On the browser, hit loginPage.cy.js, in the Specs menu for the login related tests
- On the browser, productPage.cy.js, in the Specs menu for the product related tests
- There is also a test report that can be consulted
