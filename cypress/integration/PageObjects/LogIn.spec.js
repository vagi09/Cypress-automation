///<reference types="Cypress" />

import HomePage from "./HomePage";
import LoginPage from "/Users/apple/Documents/BusinessDashboard/cypress/integration/PageObjects/LogInPage";

//import LoginPage from "/Users/apple/Documents/BusinessDashboard/cypress/integration/PageObjects/LogInPage";



const login = new LoginPage()
const home = new HomePage()

describe('LogIn Test', () => {

  let signIndata;


  before(() => {
    cy.fixture('example').then(function (data) {
      signIndata = data;

    });
  });


  it.only('LogIn with valid credentials', () => {


    // const login = new LoginPage();
    login.navigate()
    cy.title().should('eq', 'Taskmo Business Admin Dashboard');
    login.enterEmail()
      .clear()
      .should('be.visible')
      .should('not.be.disabled')
      .type(signIndata.email)
    login.enterPassword()
      .clear()
      .should('be.visible')
      .should('not.be.disabled')
      .type(signIndata.password)
      
    login.submit()
      .should('be.visible')
      .click()
      
      .should('have.text', 'Login');
    home.navigateHomePage().click()
    home.Calendar().click();
    home.clickOnMonth().click();

  });

  it('Login with Invalid Credentials', () => {
    //const login = new LoginPage();
    login.navigate();
    login.enterEmail().type(signIndata.invalidEmail)
    login.enterPassword().type(signIndata.invalidPw);

    login.submit()
      .click()
      .should('have.text', 'Login')




  })
});

