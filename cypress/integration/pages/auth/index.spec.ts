describe('Sign up page', () => {
  beforeEach(() => {
    cy.visit('/auth/sign-up')
  })

  it('should navigate to the Sign up page', () => {
    cy.url().should('include', '/auth/sign-up')
  })

  it('should find form in the sign up page', () => {
    cy.get('.registration-form').contains('h1', 'Join the Family')
  })

  it('should be able to select input fields and click sign up button', () => {
    cy.get('.registration-form__text-input').eq(0).type('TestUsername')
    cy.get('.registration-form__text-input').eq(1).type('TestFirstname')
    cy.get('.registration-form__text-input').eq(2).type('TestLastname')
    cy.get('.registration-form__text-input').eq(3).type('TestPassword')
    cy.get('.registration-form__text-input').eq(4).type('TestPassword')
    cy.get('.registration-form__text-input').eq(5).type('TestAethery@crit.io')

    cy.get('.registration-form__button').first().click()
  })

  it('should print out errors', () => {
    cy.get('.registration-form__button').first().click()

    cy.get('.registration-form__error-message').should('be.visible')
  })
})

export default {}
