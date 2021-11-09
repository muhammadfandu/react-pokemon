import {} from '@cypress/react';

describe('Pokemon App Testing', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('Render home page', () => {
    cy.get('h1').contains('Explore Pokemon');
    cy.get('strong').contains('Loading');
  });

  it('Display pokemon list', () => {
    cy.wait(1000);

    cy.get('div.card').find('img');
    cy.get('a.btn').contains('Detail');
  });

  it('Display pokemon list and open pokemon detail', () => {
    cy.wait(1000);

    cy.get('a.btn').contains('Detail').click();
    cy.get('h1').contains('Pokemon Detail');
    cy.get('div.card').find('img');
  });

  it('Attempt to catch a Pokemon', () => {
    cy.wait(1000);

    cy.get('a.btn').contains('Detail').click();
    cy.get('h1').contains('Pokemon Detail');
    cy.get('button.btn-success').contains('Catch').click();
    cy.wait(1000);
    cy.get('div.swal-modal');
  });
});
