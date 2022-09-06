/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should render the home page and find stack button", () => {
    cy.get("button");
  });
});

//bypass Eslint compilation error
export { }