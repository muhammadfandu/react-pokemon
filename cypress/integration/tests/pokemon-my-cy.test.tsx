import {} from '@cypress/react';

describe('My Pokemon Page Testing', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/my');
  });

  it('Render Home Page', () => {
    cy.get('h1').contains('My Pokemon');
  });
});
