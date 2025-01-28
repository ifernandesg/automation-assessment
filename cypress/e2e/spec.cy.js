/// <reference types="Cypress" />

describe('Search for device', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });
  it('Login', () => {
    cy.fixture('data').then((data) => {
      cy.get('[data-test="username"]')
      .type('data.username')
})})})