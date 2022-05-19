///<reference types="Cypress" />


describe('TM Business Dashbaord Test', () => {

  //   before(() => {


  // cy.visit("https://business.dev.task-mo.com/");

  //     cy.fixture('example').then(function (signIndata) {
  //       this.signIndata = signIndata;
  //     })
  //   })

  beforeEach('Login Page Test', () => {
    //expect(true).to.equal(true)

    cy.visit('https://business.dev.task-mo.com/');
    cy.title().should('eq', 'Taskmo Business Admin Dashboard');
    cy.document().its('contentType').should('eq', 'text/html')
    cy.log("Launched Business Dashbaord URL");
    cy.get(':nth-child(2)>.MuiFormControl-root >.MuiInputBase-root > #filled-basic').type("admin@taskmo.com");
    cy.get(':nth-child(3)>.MuiFormControl-root >.MuiInputBase-root > #filled-basic').type("123456");
    cy.get(':nth-child(4) > .MuiButtonBase-root').click();
    cy.log("successfully Logged in")


  })


  it('Home Page Test', () => {
    //expect(true).to.equal(true)

    cy.get('[data-testid="CalendarIcon"]').click();
    cy.get('.MuiMonthPicker-root > .MuiTypography-h5').click();
    cy.get(':nth-child(4) > .PrivatePickersYear-yearButton').click();
    cy.log("Tested caleneder widget successfully")
  })

  it('Testing `Company Page` On clicking', () => {

    cy.get('[data-testid="BusinessIcon"]').click();
    cy.get('.MuiGrid-container > .MuiButtonBase-root').click();
    cy.get('#demo-simple-select').click()
    cy.get('[data-value="Private Limited"]').click()
    cy.get('#outlined-basic').type("L01631KA2010PTC096843");
    cy.log("Succesfully clicked on company tab")
  })

  it('Testing `New company` without adding Company details', () => {

    cy.get('[data-testid="BusinessIcon"]').click();
    cy.get('.MuiGrid-container > .MuiButtonBase-root').click();
    cy.get('#demo-simple-select').click()
    cy.get('[data-value="Private Limited"]').click()
    cy.get('#outlined-basic').type("L01631KA2010PTC096844");
    cy.get('.MuiInputBase-root > .MuiButtonBase-root').click();
    cy.scrollTo('bottom')
    cy.get('.MuiGrid-justify-content-xs-flex-end > [type="submit"]').click()
  })

  it('Testing `New company` by adding Company details', () => {
    //expect(true).to.equal(true)

    cy.get('[data-testid="BusinessIcon"]').click();
    cy.get('.MuiGrid-container > .MuiButtonBase-root').click();
    cy.get('#demo-simple-select').click()
    cy.get('[data-value="Private Limited"]').click()
    cy.get('#outlined-basic').type("L01631KA2010PTC096847");
    cy.get('.MuiInputBase-root > .MuiButtonBase-root').click();
    // const filepath = "images/razor pay.png"
    // cy.get('[data-testid="UploadIcon"] > path')
    // .click({force: true})
    // .attachFile(filepath);
    //**Add company Details */
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .MuiInputBase-root > #outlined-basic').type("Taskmo");
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .MuiInputBase-root > #outlined-basic').type("Taskmo");
    cy.get(':nth-child(3) > :nth-child(1) > [style="min-width: 100%;"] > .MuiInputBase-root > #outlined-basic').click();
    cy.get('[data-value="Service Tech"]').click();

    //** Add founder detaiils *//
    cy.get('.MuiPaper-root > .MuiGrid-container > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic').type("Taskmo");
    cy.get('.MuiPaper-root > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic').type("taskmo@taskmo.com");
    cy.scrollTo('bottom')

    //** Add company address details */
    cy.log("Adding Company Details")
    cy.get(':nth-child(7) > .MuiCardContent-root > [style="background-color: white; border-radius: 10px;"] > .MuiGrid-container.MuiGrid-grid-xs-12 > :nth-child(1) > .MuiTextField-root > .MuiInputBase-root').type("qwefjfjdjfvkf");
    cy.get(':nth-child(7) > .MuiCardContent-root > [style="background-color: white; border-radius: 10px;"] > .MuiGrid-container.MuiGrid-grid-xs-12 > :nth-child(1) > [style="min-width: 100%;"] > .MuiInputBase-root > #outlined-basic')
      .click();
    cy.get('[data-value="Dadra and Nagar Haveli"]').click();
    cy.get(':nth-child(7) > .MuiCardContent-root > [style="background-color: white; border-radius: 10px;"] > .MuiGrid-container.MuiGrid-grid-xs-12 > :nth-child(2) > :nth-child(1) > .MuiInputBase-root > #outlined-basic')
      .type("Bengaluru");
    cy.get(':nth-child(7) > .MuiCardContent-root > [style="background-color: white; border-radius: 10px;"] > .MuiGrid-container.MuiGrid-grid-xs-12 > :nth-child(2) > :nth-child(2) > .MuiInputBase-root > #outlined-basic')
      .type("560078")
    cy.get(':nth-child(2) > [style="min-width: 100%;"] > .MuiInputBase-root > #outlined-basic').click();
    cy.get('#menu-country > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root').click();
    cy.get('.MuiGrid-justify-content-xs-flex-end > [type="submit"]').click();
    cy.log("Company created successfully")
})

})
