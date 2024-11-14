/// <reference types="cypress" />

describe('programs', () => {
  it('should render main image', () => {
    cy.visit('http://localhost:4200/programs')
  })
})