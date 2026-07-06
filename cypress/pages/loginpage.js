/// <reference types="cypress" />

class LoginPage {

  visit() {
    cy.visit('https://www.saucedemo.com/?utm_source=chatgpt.com');
  }

  enterusername(username) {
    cy.get('#user-name').type(username);
  }

  enterpassword(password) {
    cy.get('#password').type(password);
  }

  clicklogin() {
    cy.get('#login-button').click();
  }

}

export default new LoginPage();