describe('Dashboard layout', () => {
  beforeEach(() => {
    cy.visit('/home');
  });

  it('should find the header', () => {
    cy.get('.header').contains('h2', 'Crit');
  });

  it('should find the side navigation bar', () => {
    cy.get('.navigation-bar-aside').contains('span', 'Home');
  });
});
