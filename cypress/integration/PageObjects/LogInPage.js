class LoginPage {

  navigate() {
    cy.visit('https://business.dev.task-mo.com/');
  }

  enterEmail(username) {
   return cy.get(':nth-child(2)>.MuiFormControl-root >.MuiInputBase-root > #filled-basic')

    //   .type(username);
    // return this
  }

  enterPassword(pswd) {
  return  cy.get(':nth-child(3)>.MuiFormControl-root >.MuiInputBase-root > #filled-basic')

    //   .type(pswd);
    // return this
  }

  submit() {
   return cy.get(':nth-child(4) > .MuiButtonBase-root');
  }

}
export default LoginPage