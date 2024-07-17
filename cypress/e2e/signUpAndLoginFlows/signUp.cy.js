const faker = require("faker");
let email = faker.internet.email();
describe("Sign up and login flows", function () {
  it("1_Verify that a user can sign up with valid details", function () {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get('ul[class="header links"]>li:nth-of-type(3)>a').click({
      multiple: true,
      force: true,
    });
    cy.get('input[id="firstname"]').type("Sundaram", { delay: 0 });
    cy.get('input[id="lastname"]').type("Yadav", { delay: 0 });
    cy.get('input[id="email_address"]').type(email);
    cy.get('input[id="password"]').type(email + "str");
    cy.get('input[id="password-confirmation"]').type(email + "str");
    cy.get('button[class="action submit primary"]').click();
    cy.contains("Thank you for registering with Main Website Store.").should(
      "be.visible"
    );
  });
  it("2_ Verify that a user cannot sign up with an invalid email format.", function () {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get('ul[class="header links"]>li:nth-of-type(3)>a').click({
      multiple: true,
      force: true,
    });
    cy.get('input[id="firstname"]').type("Sundaram", { delay: 0 });
    cy.get('input[id="lastname"]').type("Yadav", { delay: 0 });
    cy.get('input[id="email_address"]').type("email");
    cy.get('input[id="password"]').type(email + "str");
    cy.get('input[id="password-confirmation"]').type(email + "str");
    cy.get('button[class="action submit primary"]').click();
    cy.contains(
      "Please enter a valid email address (Ex: johndoe@domain.com)."
    ).should("be.visible");
  });
  it("3_Verify that a user cannot sign up with a valid password.", function () {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get('ul[class="header links"]>li:nth-of-type(3)>a').click({
      multiple: true,
      force: true,
    });
    cy.get('input[id="firstname"]').type("Sundaram", { delay: 0 });
    cy.get('input[id="lastname"]').type("Yadav", { delay: 0 });
    cy.get('input[id="email_address"]').type(email);
    cy.get('input[id="password"]').type("password");
    cy.get('input[id="password-confirmation"]').type("password");
    cy.get('button[class="action submit primary"]').click();
    cy.contains(
      "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters."
    ).should("be.visible");
  });
  it("4_Verify that a user cannot sign up if the password and confirm password fields do not match.", function () {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get('ul[class="header links"]>li:nth-of-type(3)>a').click({
      multiple: true,
      force: true,
    });
    cy.get('input[id="firstname"]').type("Sundaram", { delay: 0 });
    cy.get('input[id="lastname"]').type("Yadav", { delay: 0 });
    cy.get('input[id="email_address"]').type(email);
    cy.get('input[id="password"]').type("password@123");
    cy.get('input[id="password-confirmation"]').type("password1");
    cy.get('button[class="action submit primary"]').click();
    cy.contains("Please enter the same value again.").should("be.visible");
  });
});
