///<reference types="Cypress" />
/// <reference types="cypress-xpath" />


describe('TM Business Dashbaord Test', () => {

  let signIndata;


  before(() => {
    cy.fixture('example').then(function (data) {
      signIndata = data;

    });
  });

  beforeEach('Login Page Test', () => {
    
    cy.visit(signIndata.url);
    cy.title().should('eq', 'Taskmo Business Admin Dashboard');
    cy.document().its('contentType').should('eq', 'text/html')
    cy.log("Launched Business Dashbaord URL");
    cy.get(':nth-child(2)>.MuiFormControl-root >.MuiInputBase-root > #filled-basic').type(signIndata.email);

    cy.get(':nth-child(3)>.MuiFormControl-root >.MuiInputBase-root > #filled-basic').type(signIndata.password);
    cy.get(':nth-child(4) > .MuiButtonBase-root').click();
    cy.log("successfully Logged in")
  });

  // afterEach("Logout Test", () => {

  //   cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ul:nth-child(1) > div:nth-child(11) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)").click();
  //   cy.get("body div[role='presentation'] div[role='presentation'] button:nth-child(1)").click();


  // })

  it('Logging in with Invalid credentilas',()=>{

    cy.visit(signIndata.url);
    cy.title().should('eq', 'Taskmo Business Admin Dashboard');
    cy.document().its('contentType').should('eq', 'text/html')
    cy.log("Launched Business Dashbaord URL");
    cy.get(':nth-child(2)>.MuiFormControl-root >.MuiInputBase-root > #filled-basic').type(signIndata.invalidEmail);

    cy.get(':nth-child(3)>.MuiFormControl-root >.MuiInputBase-root > #filled-basic').type(signIndata.invalidPw);
    cy.get(':nth-child(4) > .MuiButtonBase-root').click();

 });


  it('Home Page Test', () => {
    //expect(true).to.equal(true)

    cy.get('[data-testid="CalendarIcon"]').click();
    cy.get('.MuiMonthPicker-root > .MuiTypography-h5').click();
    cy.get(':nth-child(4) > .PrivatePickersYear-yearButton').click();
    cy.log("Tested caleneder widget successfully")
  });

  it('Testing `search` bar in company tab', () => {
    cy.get('[data-testid="BusinessIcon"]').click();
    cy.get("input[placeholder='Search']").type("swizz");
    cy.get('td:nth-child(1) a:nth-child(1)').click({ multiple: true });
    cy.go('back');
    cy.go('forward');
    cy.scrollTo('bottom');
    cy.scrollTo('top');
  });

  it('Testing `Company Page` On clicking', () => {

    cy.get('[data-testid="BusinessIcon"]').click();
    cy.get('.MuiGrid-container > .MuiButtonBase-root').click();
    cy.get('#demo-simple-select').click()
    cy.get('[data-value="Private Limited"]').click()
    cy.get('#outlined-basic').type("L01631KA2010PTC096868");
    cy.log("Succesfully clicked on company tab");
  });

  it('Testing `New company` without adding Company details', () => {

    cy.get('[data-testid="BusinessIcon"]').click();
    cy.get('.MuiGrid-container > .MuiButtonBase-root').click();
    cy.get('#demo-simple-select').click()
    cy.get('[data-value="Private Limited"]').click()
    cy.get('#outlined-basic').type("L01631KA2010PTC096889");
    cy.get('.MuiInputBase-root > .MuiButtonBase-root').click();
    cy.scrollTo('bottom', { ensureScrollable: false })
    cy.get('.MuiGrid-justify-content-xs-flex-end > [type="submit"]').click();
  });

  it('Testing `New company` by adding Company details', () => {


    cy.get('[data-testid="BusinessIcon"]').click();
    cy.get('.MuiGrid-container > .MuiButtonBase-root').click();
    cy.get('#demo-simple-select').click()
    cy.get('[data-value="Private Limited"]').click()
    cy.get('#outlined-basic').type("L01631KA2010PTC09698");
    cy.get('.MuiInputBase-root > .MuiButtonBase-root').click();
    
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
  });

  it('Creating Diigital Project', () => {

    cy.log("Adding New Digital project")
    cy.log("STTEP 1: Adding Basic Details")
    cy.xpath("//span[normalize-space()='Digital Projects']").click();
    cy.get("button[type='submit']").click();
    cy.xpath("(//div[@id='outlined-basic'])[1]").click({ force: true });
    cy.get("div[id='menu-domain'] li:nth-child(2)").click();
    cy.get(':nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic').click({ force: true });
    cy.get('#menu-verticals > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root').click({ force: true });
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic').type('Brand Promoter')
    cy.get(':nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > #account_select')
      .click({ force: true })
    cy.get('#account_select-option-5').click();
    cy.get(':nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > #account_select').click({multiple:true});
    cy.get('#account_select-option-0').click();
    cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic').type('Bounce');
    cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic').type('Bengaluru');
    cy.get('.WAMuiChipInput-chipContainer-160 > .MuiInputBase-root > #outlined-basic').type('English');
    cy.get('.MuiGrid-grid-sm-4 > .MuiGrid-root > .MuiButtonBase-root').click();

    cy.log("STEP 2: Add Project Details")
    cy.get('[style="box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 9px; border-radius: 20px; padding: 20px;"] > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root').type("Promoting Brand");
    cy.get(':nth-child(7) > :nth-child(4) > .MuiGrid-root > .MuiButtonBase-root').click();
    cy.log("Added Project Details")

    cy.log("STEP3: payout details");
    cy.get('[style="width: 100%;"] > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic').click();
    cy.get('#menu-payment_type > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root').click();
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic').type('2');
    cy.get(':nth-child(4) > .MuiGrid-root > .MuiButtonBase-root').click();


    cy.log('STEP4: How to perfrom')
    cy.get('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-adornedEnd.MuiOutlinedInput-adornedEnd')
      .click()
      .type('promote brand');
    cy.get('.MuiInputBase-root > .MuiButtonBase-root').click();
    cy.get(':nth-child(7) > :nth-child(4) > .MuiGrid-root > .MuiButtonBase-root').click();
    cy.wait(10000);




    cy.log("Add Question")

    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic').type("Whats your first car?");
    cy.wait(10000);
    cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic').type("Tesla")
    cy.get('[style="padding-bottom: 0px;"] > .MuiGrid-item > .MuiButtonBase-root').click();
    cy.get(':nth-child(4) > .MuiGrid-root > .MuiButtonBase-root').click();

    cy.wait(10000)


    cy.get('.MuiInputBase-root').type("bounce brand promoting");


    cy.get(':nth-child(7) > :nth-child(4) > .MuiGrid-root > .MuiButtonBase-root').click({ force: true });

    cy.get('#outlined-error').click();


    cy.get('[data-value="Tamil"]').click();
    cy.get(':nth-child(4) > .MuiGrid-root > .MuiButtonBase-root').click();
  });

});
