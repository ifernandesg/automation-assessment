/// <reference types="Cypress" />

describe('Search for device', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });
  it('login', () => {
    cy.fixture('data').then((data) => {

      cy.get('[data-test="username"]')
        .should('be.visible')
        .type(data.username)

      cy.get('[data-test="password"]')
        .should('be.visible')
        .type(data.password)

      cy.get('[data-test="login-button"]')
        .should('be.visible')
        .click()
    })
  })
  it('failToLogin', () => {
    cy.fixture('data').then((data) => {

      cy.get('[data-test="username"]')
        .should('be.visible')
        .type(data.wrongUsername)

      cy.get('[data-test="password"]')
        .should('be.visible')
        .type(data.password)

      cy.get('[data-test="login-button"]')
        .should('be.visible')
        .click()

      cy.get('[data-test="error"]')
      .should('be.visible')
      .contains('Epic sadface: Username and password do not match any user in this service')
    })
  })



})