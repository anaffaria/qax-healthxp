import users from "../fixtures/users.json";

describe("login", () => {

  
  it("Deve logar com o perfil do admin", () => {
    const user = users.admin;
    cy.log(JSON.stringify(user));

    cy.visit("http://localhost:3000");

    cy.get("input[name=email]").type(user.email);
    cy.get("input[name=password]").type(user.password);
    cy.contains("button", "Entrar").click();

    cy.contains("aside .logged-user", "Olá, " + user.name).should("be.visible");
  });

  it("Não deve logar com senha incorreta", () => {
    const user = users.inv_pass

    cy.visit("http://localhost:3000");

    cy.get("input[name=email]").type(user.email);
    cy.get("input[name=password]").type(user.password);
    cy.contains("button", "Entrar").click();

  });
});
