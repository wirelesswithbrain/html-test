/// <reference types="Cypress" />

context("Tester vos connaissances sur l'html", () => {
    before(() => {
        cy.visit(Cypress.env().APP_URL)
    })
    it("Il doit y avoir une balise <h1 /> avec le texte 'Hello World'", () => {
        cy.get('h1').contains('Hello World')
    })
    it("Il doit y avoir une balise <h2 /> sous la balise h1 avec le texte 'CatPhotoApp'", () => {
        cy.get('h1 + h2').contains('CatPhotoApp')
    })
    it("Il doit y avoir une balise <p/> sous la balise h2 avec le texte 'Hello Paragraph'", () => {
        cy.get('h1 + h2 + p').contains('Hello Paragraph')
    })
    it("Il doit y avoir une seconde balise <p/> sous la précédente avec le texte 'Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot.'", () => {
        cy.get('h1 + h2 + p + p').contains('Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot.')
    })
    it("Il doit y avoir une balise <div/> sous la 2eme balise </p> (le commentaire doit etre supprimé)", () => {
        cy.get('h1 + h2 + p + p + div').contains('Commentaire à affichez')
    })
    it("Il doit y avoir une balise <main/> dans la page avec à l'intérieur une balise <p /> avec le texte 'Purr jump eat the grass rip the couch scratched sunbathe.'", () => {
        cy.get('main > p').contains('Purr jump eat the grass rip the couch scratched sunbathe.')
    })
    it("il doit y avoir une balise <img /> avec l'attribut src à 'https://bit.ly/fcc-relaxing-cat' et l'attribut alt à :'texte alternatif'", () => {
        cy.get('img').should('have.attr', 'src').should('include', 'https://bit.ly/fcc-relaxing-cat')
        cy.get('img').should('have.attr', 'alt').should('include', 'texte alternatif')
    })
    it("il doit y avoir une balise <a /> avec l'attribut href à 'http://freecatphotoapp.com' et dont le texte est 'cat photos'", () => {
        cy.get('a').should('have.attr', 'href').should('include', 'http://freecatphotoapp.com')
        cy.get('a').contains('cat photos')
    })
    it("La balise <a /> doit disposer d'un attribut 'target' dont la valeur est '_blank'", () => {
        cy.get('a').should('have.attr', 'target').should('include', '_blank')
    })
    it("Il doit y avoir une balise <footer /> dont l'attribut 'id' est 'footer' et dont le texte est 'Copyright Cat Photo App' sous la balise <main />", () => {
        cy.get('main + #footer').contains('Copyright Cat Photo App')
    })
    it("Il doit y avoir une balise <header /> avant la balise <main /> dont l'attribut 'id' est 'header' et dont le texte est 'Cat Photo App Header'", () => {
        cy.get('#header + main')
        cy.get('#header').contains('Cat Photo App Header')
    })
    it("Il doit y avoir une balise <button /> dans la balise <footer /> dont le texte est 'MiaouOu'", () => {
        cy.get('footer button').contains('A simple button')
    })
    it("Le texte dans le <header /> dois être entouré d'une balise <i />", () => {
        cy.get('header i')
    })
    it("Le texte dans le <footer /> dois être entouré d'une balise <b />", () => {
        cy.get('footer b')
    })
    it("Il doit y avoir une balise <input /> dans la balise <main /> dont l'attribut 'type' est 'password'", () => {
        cy.get('main input').should('have.attr', 'type').should('include', 'password')
    })
})
