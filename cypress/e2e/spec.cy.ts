describe('My First Test', () => {
  beforeEach("Visitar pagina", () => {
    cy.visit("http://localhost:4200/")
  })
  it('Comprobar si hay un elemento con un texto especifico', ()=> {
    cy.contains("Inventario de plantas")
  })
  it('Guardar planta', ()=> {
    cy.get("[placeholder='Nombre de la planta']").type("Nogal")
    cy.get("[alt='Arbol']").click()
    cy.get("#savePlant").click()
  })
})