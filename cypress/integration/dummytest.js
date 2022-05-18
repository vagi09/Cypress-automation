///<reference types="Cypress" />

describe('dummy test', () => {

  before(() => {

    cy.fixture('example').then(function (data) {

      this.data = data;



    })


    it('logintest', () => {

      cy.visit("https://www.stealmylogin.com/demo.html");
      cy.get("input[name='username']").type(this.data.email);
      cy.get("input[name='password']").type(this.data.password);




    })


  })




})