describe('Sign up page', () => {
  beforeEach(() => {
    cy.visit('/auth/sign-up');
  });

  it('should navigate to the Sign up page', () => {
    cy.url().should('include', '/auth/sign-up');
  });

  it('should find form in the sign up page', () => {
    cy.get('.registration-form').contains('h1', 'Join the Family');
  });

  it('should be able to select input fields and click sign up button', () => {
    cy.intercept('POST', '**/api/users/register-user', {
      body: 'User Created',
      statusCode: 201,
    });

    cy.get('.registration-form__text-input').eq(0).type('TestUsername');
    cy.get('.registration-form__text-input').eq(1).type('TestFirstname');
    cy.get('.registration-form__text-input').eq(2).type('TestLastname');
    cy.get('.registration-form__text-input').eq(3).type('TestPassword');
    cy.get('.registration-form__text-input').eq(4).type('TestPassword');
    cy.get('.registration-form__text-input').eq(5).type('TestAethery@crit.io');

    cy.get('.registration-form__button').first().click();

    cy.get('.registration-form__success-message').should('be.visible');
  });

  it('should print out errors', () => {
    cy.get('.registration-form__button').first().click();

    cy.get('.registration-form__error-message').should('be.visible');
  });
});

describe('Sign in page', () => {
  beforeEach(() => {
    cy.visit('/auth/sign-in');
  });

  it('should navigate to the Sign in page', () => {
    cy.url().should('include', '/auth/sign-in');
  });

  it('should find form in the sign in page', () => {
    cy.get('.login-form').contains('p', 'Not Signed up?');
  });

  it('should be able to fill input fields and redirect the user if success', () => {
    cy.intercept('POST', '**/api/users/login-user', {
      body: 'access_token: 1234',
      statusCode: 201,
    });

    cy.get('.login-form__text-field').eq(0).type('testemail@crit.io');
    cy.get('.login-form__text-field').eq(1).type('testpassword');

    cy.get('.login-form__submit').first().click();
    cy.url().should('include', '/home');
  });

  it('should show an error message if email does not exist', () => {
    cy.intercept('POST', '**/api/users/login-user', {
      body: {
        message: {
          message: 'testEmail@email.io does not exist',
        },
      },
      statusCode: 400,
    });

    cy.get('.login-form__text-field').eq(0).type('testEmail@email.io');
    cy.get('.login-form__text-field').eq(1).type('testpassword');

    cy.get('.login-form__submit').first().click();

    cy.get('.login-form__error-message').should('be.visible');
  });

  it('should show an error message if password is not accepted', () => {
    cy.intercept('POST', '**/api/users/login-user', {
      body: 'unauthorized',
      statusCode: 401,
    });

    cy.get('.login-form__text-field').eq(0).type('testemail@crit.io');
    cy.get('.login-form__text-field').eq(1).type('testpasswordd');

    cy.get('.login-form__submit').first().click();

    cy.get('.login-form__error-message').should('be.visible');
  });

  it('should print out errors if fields are not filled', () => {
    cy.get('.login-form__submit').first().click();

    cy.get('.login-form__error-message').should('be.visible');
  });
});
