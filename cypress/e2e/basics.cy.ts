/// <reference types="cypress" />

describe('programs', () => {
  it('should render program list', () => {
    cy.visit('http://localhost:4200/programs');
    cy.get('[data-test="program-list"]');
  })

  it('should display the page title', () => {
    cy.visit('http://localhost:4200/programs');
    cy.get('app-header').contains('Home');
  })

  it('should display a program item', () => {
    cy.visit('http://localhost:4200/programs');
    cy.get('[data-test="program-item"]');
  })
})