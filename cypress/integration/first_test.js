describe('First test', () => {


    it('Visiting Main Page', () => {
        cy.visit("https://staging.tryproven.com/")
        cy.contains("ALL ABOUT YOU")
    })
})