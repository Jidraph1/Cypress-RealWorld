describe("Newsletter subscribe form", ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })

    it("allows the user to subscribe to the email list", ()=>{
        cy.getByData("email-input").type('Jidrap@gmail.com')
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains('Success: Jidrap@gmail.com')
    })
    it("should Not allow an invalid email address", ()=>{
        cy.getByData("email-input").type('Jidraph.com')
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })
    it("should not allow to sign up with an existing email", ()=>{
        cy.getByData("email-input").type('john@example.com')
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message")
        .should("exist")
        .contains("already exists. Please use a different email address.")
    })
})