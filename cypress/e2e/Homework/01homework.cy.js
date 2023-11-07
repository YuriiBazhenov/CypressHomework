
describe("Homework", () => {

  it("Test Case 01 - Validate the Contact Us information", () => {
    cy.visit("https://techglobal-training.com/frontend/project-1");


    const text = ['Contact Us', '2860 S River Rd Suite 480, Des Plaines, IL 60018', 'info@techglobalschool.com', '(773) 257-3010']
    cy.get('div > .mb-5').children().each(($el, index) => {
      cy.wrap($el).should('have.text', text[index])
    })

  })

  it("Test Case 02 - Validate the Full name input box", () => {
    cy.visit("https://techglobal-training.com/frontend/project-1");



    cy.get(':nth-child(1) > .control > .input').should('be.visible').and('have.attr', 'required')
    cy.get('form > :nth-child(1) > .label').should('have.text', 'Full name *')
    cy.get('input[placeholder*="Enter your full name"]')

  })

  it("Test Case 03 - Validate the Gender radio button", () => {
    cy.visit("https://techglobal-training.com/frontend/project-1");

    const data = ['Male', 'Female', 'Prefer not to disclose']
    cy.get('.control > .label').should('have.text', 'Gender *').and('not.have.attr', 'required')
    cy.get('.control > .radio').each(($el, index) => {
      cy.wrap($el).should('have.text', data[index]).and('not.be.selected').click()
      cy.get(':nth-child(2) > .mr-1').click()
      cy.get(':nth-child(3) > .mr-1').should('not.be.selected')
      cy.get(':nth-child(4) > .mr-1').should('not.be.selected')
      cy.get(':nth-child(3) > .mr-1').click()
      cy.get(':nth-child(2) > .mr-1').should('not.be.selected')
      cy.get(':nth-child(4) > .mr-1').should('not.be.selected')

    })
    /*
          cy.checkOptionAndValidateOthers('Male', expectedTexts)
          cy.checkOptionAndValidateOthers('Female', expectedTexts)
    
      */


  })

  const testCases =
    [
      {
        testName: 'Validate the Address input box',
        label: 'Address',
        placeholder: 'Enter your address',
        required: false
      },
      {
        testName: 'Validate the Email input box',
        label: 'Email *',
        placeholder: 'Enter your email',
        required: true
      },
      {
        testName: 'Validate the Phone input box',
        label: 'Phone',
        placeholder: 'Enter your phone number',
        required: false
      },
      {
        testName: 'Validate the Massage input box',
        label: 'Message',
        placeholder: 'Type your message here...',
        required: false
      }
    ]


  testCases.forEach((test) => {
    it(`Test ${test.testName}`, () => {
      cy.visit("https://techglobal-training.com/frontend/project-1");

      cy.get('.label').contains(test.label).should('have.text', test.label)

      cy.contains('.label', test.label).should('have.text', test.label)
      cy.contains('.label', test.label).parent().find('input, textarea').should('be.visible')
        .and('have.attr', 'placeholder', test.placeholder)
        .and(test.required ? 'have.attr' : 'not.have.attr', 'required')

    })

  })


  it("Test Case 04 - Validate the Address input box", () => {
    cy.visit("https://techglobal-training.com/frontend/project-1");

    // const data1 = ['Address', 'Email *', 'Phone', 'Message']
    cy.contains('label', 'Address').should('have.text', 'Address')
    cy.contains('label', 'Address').nextAll().should('be.visible').and('not.have.attr', 'required')
    cy.get('input[placeholder*="Enter your address"]')

  })


  it("Test Case 08 - Validate the Consent checkbox", () => {
    cy.visit("https://techglobal-training.com/frontend/project-1");


    cy.get('.checkbox').should('have.text', ' I give my consent to be contacted.')
    cy.get('.checkbox > input').click().should('be.checked').click().should('not.be.checked').should('have.attr', 'required')


  })

  it("Test Case 09 - Validate the SUBMIT button", () => {
    cy.visit("https://techglobal-training.com/frontend/project-1");

    cy.get('div > .control .button').should('be.visible').and('be.enabled').and('have.text', 'SUBMIT')

  })

  it("Test Case 10 - Validate the form submission", () => {
    cy.visit("https://techglobal-training.com/frontend/project-1");


    const data = ['John Doe', '2860 S River Rd Suite 480, Des Plaines, IL 60018', 'johndoe@gmail.com', '(773) 777 7777', 'Good luck, have fun!']

    cy.get('form > div > div > .input,textarea').each(($el, index) => {
      cy.wrap($el).type(data[index]);
    })

    cy.get(':nth-child(2) > .mr-1').click()
    cy.get('.checkbox > input').click()
    cy.get('div > .control .button').realClick()
    Cypress.on('uncaught:exception', () => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.get('.mt-5').should('have.text', 'Thanks for submitting!')

  })
})
