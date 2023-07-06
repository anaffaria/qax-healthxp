describe('home', () => {
  it('webapp deve estar online', () => {
    cy.visit('https://localhost:3000')

    cy.title()
      .should('eq', 'Health eXperience | Exclusivo para treinamentos na QAx')
  })
})