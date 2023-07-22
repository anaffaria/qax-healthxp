describe('login', ()=>{
    it('Deve logar com o perfil do admin', ()=>{
        
        
        const user ={
            email: 'admin@healthxp.com',
            password: 'xperience'
        }

        cy.visit('http://localhost:3000')
        cy.get('input[name=email]').type(user.email)
        cy.get('input[name=password]').type(user.password)
        cy.contains('button', 'Entrar').click()
        cy.contains('aside .logged-user', 'Olá, Admin')
            


    })
})