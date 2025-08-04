/// <reference types="cypress" />

it('vytvorenie nového boardu', () => {

    cy
    .visit('/')

cy
    .get('#new-board')
    .click()

cy 
    .get('#new-board input')
    .type('My new board {enter}')

  
});

it('označenie boardu hviezdičkou', () => {

    cy
        .visit('/')
    
    cy
        .get('.board_title')
        .get('.Star')
        .click({force:true, multiple: true})
    
  

});

it.only('označenie tasku', () => {

    cy
        .visit('/board/34096040370')
  
    cy
        .get('.Task input')
        .check(false)
});