import users from "../fixtures/users.json";
import login from "../support/pages/LoginPage";


describe("login", () => {
  it("Deve logar com o perfil do admin", () => {
    const user = users.admin;

    login.submit(user)

    cy.contains("aside .logged-user", "Olá, " + user.name).should("be.visible");
  });

  it("Não deve logar com senha incorreta", () => {
    const user = users.inv_pass;

    login.submit(user)
    login.popUpHave("Suas credenciais são inválidas, por favor tente novamente!");
  });

  it("Não deve logar com e-mail não cadastrado", () => {
    const user = users.email_not_found;

    login.submit(user)
    login.popUpHave("Suas credenciais são inválidas, por favor tente novamente!");
  });

  it("Não deve logar com e-mail invalido", () => {
    const user = users.inv_email;

    login.submit(user)
    login.popUpHave("Insira um email válido.");
  });

  it("Não deve logar com e-mail em branco", () => {
    const user = users.empty_email;

    login.submit(user)
    login.popUpHave("Os campos email e senha são obrigatórios.");
  });

  it("Não deve logar com senha em branco", () => {
    const user = users.empty_password;

    login.submit(user)
    login.popUpHave("Os campos email e senha são obrigatórios.");
  });
});

