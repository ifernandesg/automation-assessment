/// <reference types="Cypress" />

describe('Search for device', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('Verify product fields', () => {
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

            cy.get('[data-test="title"]')
                .should('be.visible')
                .contains('Products')

            cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]')
                .should('be.visible')
                .contains(data.firstProductName)

            cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .inventory_item_label > [data-test="inventory-item-desc"]')
                .should('be.visible')
                .contains(data.firstProductDescription)

            cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]')
                .should('be.visible')

            cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
                .should('be.visible')
                .contains(data.firstProductPrice)

            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
                .should('be.visible')
                .click()
        })
    })
    it('Click and assure detailed view of product', () => {
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

            cy.get('[data-test="title"]')
                .should('be.visible')
                .contains('Products')

            cy.get('[data-test="inventory-item-name"]')
                .should('be.visible')
                .contains(data.customProductName)
                .click()

            cy.get('[data-test="inventory-item-name"]')
                .should('be.visible')
                .contains(data.customProductName)

            cy.get('[data-test="inventory-item-desc"]')
                .should('be.visible')
                .contains(data.customProductDescription)

            cy.get('.inventory_details_img')
                .should('be.visible')

            cy.get('[data-test="inventory-item-price"]')
                .should('be.visible')
                .contains(data.customProductPrice)

            cy.get('[data-test="add-to-cart"]')
                .should('be.visible')
                .click()

            cy.get('[data-test="remove"]')
                .should('be.visible')
                .click()

            cy.get('[data-test="back-to-products"]')
                .should('be.visible')
                .click()

            cy.get('[data-test="title"]')
                .should('be.visible')
                .contains('Products')
        })
    })
    it('Verify sort by price in ascending, descending and alphabetical ascending and descending', () => {
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

            cy.get('[data-test="title"]')
                .should('be.visible')
                .contains('Products')

            cy.get('[data-test="product-sort-container"]')
                .should('be.visible')
                .select('Name (A to Z)')

            cy.get('[data-test="inventory-item-name"]')
                .should('be.visible')
                .first()
                .contains('Sauce Labs Backpack')

            cy.get('[data-test="product-sort-container"]')
                .should('be.visible')
                .select('Name (Z to A)')

            cy.get('[data-test="inventory-item-name"]')
                .should('be.visible')
                .first()
                .contains('Test.allTheThings() T-Shirt (Red)')

            cy.get('[data-test="product-sort-container"]')
                .should('be.visible')
                .select('Price (low to high)')

            cy.get('[data-test="inventory-item-name"]')
                .should('be.visible')
                .first()
                .contains('Sauce Labs Onesie')

            cy.get('[data-test="product-sort-container"]')
                .should('be.visible')
                .select('Price (high to low)')

            cy.get('[data-test="inventory-item-name"]')
                .should('be.visible')
                .first()
                .contains('Sauce Labs Fleece Jacket')


        })
    })
})