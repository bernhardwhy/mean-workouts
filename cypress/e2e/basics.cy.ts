/// <reference types="cypress" />

describe('programs', () => {
  it('should render program list', () => {
    cy.visit('http://localhost:4200/programs');
    cy.get('[data-test="program-list"]');
  })

  it('should display the correct week title', () => {
    cy.visit('http://localhost:4200/programs/234015');
    cy.get('[data-test="week-title"]').contains('Week 1');
  })
})